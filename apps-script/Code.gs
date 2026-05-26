/**
 * ============================================================
 *   Multi-Store — Email-to-Website Product Sync
 * ============================================================
 */

function setupConfig() {
  var props = PropertiesService.getScriptProperties();
  
  // Define all your stores and their Vercel Deploy Hooks here.
  // The script will safely ignore any store that still says 'PASTE_YOUR_HOOK_HERE'.
  var storeHooks = {
    'ALC01': 'https://api.vercel.com/v1/integrations/deploy/prj_mVxp7aFTbBT16mZXwRvirHdaIcZq/6296xxq4Uj',
    'BCD01': 'PASTE_YOUR_HOOK_HERE',
    'BLS01': 'https://api.vercel.com/v1/integrations/deploy/prj_jaWjkjk6lmAtV3msPYM2fPmfjrWa/GiXZFFVPik',
    'BSC01': 'PASTE_YOUR_HOOK_HERE',
    'CHC01': 'https://api.vercel.com/v1/integrations/deploy/prj_65GVMkKtlH1PPPyHHpjtiqdK5rNf/5g0SUhxwVL',
    'CVC01': 'https://api.vercel.com/v1/integrations/deploy/prj_6FSC1dbjSzifdWGZ683Fpa4IvEI6/vUPDDocAqN',
    'ERC01': 'PASTE_YOUR_HOOK_HERE',
    'GAC01': 'PASTE_YOUR_HOOK_HERE',
    'GCC01': 'PASTE_YOUR_HOOK_HERE',
    'GDC01': 'https://api.vercel.com/v1/integrations/deploy/prj_sGwN4xDxY9a5fQSrnwvoPQ0ZqDT9/0wI20uhMlg',
    'GJC01': 'PASTE_YOUR_HOOK_HERE',
    'GPC01': 'PASTE_YOUR_HOOK_HERE',
    'IMC01': 'PASTE_YOUR_HOOK_HERE',
    'JFC01': 'PASTE_YOUR_HOOK_HERE',
    'KLC01': 'PASTE_YOUR_HOOK_HERE',
    'KR01':  'PASTE_YOUR_HOOK_HERE',
    'KSC01': 'PASTE_YOUR_HOOK_HERE',
    'LC01':  'PASTE_YOUR_HOOK_HERE',
    'MEB01': 'PASTE_YOUR_HOOK_HERE',
    'MJ01':  'PASTE_YOUR_HOOK_HERE',
    'MKC01': 'PASTE_YOUR_HOOK_HERE',
    'NMG01': 'PASTE_YOUR_HOOK_HERE',
    'OB01':  'PASTE_YOUR_HOOK_HERE',
    'OSC01': 'PASTE_YOUR_HOOK_HERE',
    'PCB01': 'PASTE_YOUR_HOOK_HERE',
    'PL601': 'PASTE_YOUR_HOOK_HERE',
    'PLX01': 'PASTE_YOUR_HOOK_HERE',
    'PNY01': 'PASTE_YOUR_HOOK_HERE',
    'QCD01': 'PASTE_YOUR_HOOK_HERE',
    'QLC01': 'PASTE_YOUR_HOOK_HERE',
    'SCC01': 'https://api.vercel.com/v1/integrations/deploy/prj_Lwcw6GU53UepP1Zq4KRGuGmuXkVG/URB1uGRqkF',
    'STC01': 'PASTE_YOUR_HOOK_HERE'
  };
  
  props.setProperties({
    'MASTER_SHEET_ID': '1ECyzLymF6-aZn30Lt_BTzvXvXZr6LlEPHVixiv3McbQ',
    'STORE_HOOKS': JSON.stringify(storeHooks)
  });
  
  Logger.log('Config saved! Your script is now handling ' + Object.keys(storeHooks).length + ' stores.');
}

// ── Email Parsing ──
function parseOnhandEmail(storeCode) {
  if (!storeCode) return null;
  
  var query = 'subject:"' + storeCode + ' - CURRENT STOCK"';
  var threads = GmailApp.search(query, 0, 1);
  
  if (!threads.length) {
    Logger.log('No ONHAND email found for ' + storeCode);
    return null;
  }
  
  var messages = threads[0].getMessages();
  var msg = messages[messages.length - 1];
  var body = msg.getPlainBody();
  var emailDate = msg.getDate();
  
  Logger.log('Found email: ' + msg.getSubject() + ' (' + emailDate + ')');
  
  var stock = {};
  var lines = body.split('\n');
  var dataStarted = false;
  
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (!line) continue;
    if (line.indexOf('CURRENT STOCK') >= 0) { dataStarted = true; continue; }
    if (line.indexOf('DATE:') >= 0) continue;
    if (line.indexOf('****') >= 0) { dataStarted = true; continue; }
    if (line.indexOf('SEE ATTACHMENT') >= 0) break;
    if (!dataStarted) continue;
    
    var parts = line.split(/\s+/);
    var sku = parts[0];
    if (!/^\d+$/.test(sku)) continue;
    
    var weights = {};
    for (var j = 1; j < parts.length; j++) {
      var match = parts[j].match(/^(\w+)=(\d+)$/);
      if (match) {
        weights[match[1].toLowerCase()] = parseInt(match[2], 10);
      }
    }
    stock[sku] = weights;
  }
  
  var skuCount = Object.keys(stock).length;
  Logger.log('Parsed ' + skuCount + ' SKUs for ' + storeCode);
  
  return { storeCode: storeCode, date: emailDate.toISOString(), skuCount: skuCount, stock: stock };
}

// ── Master Catalog ──
function fetchMasterCatalog_() {
  var sheetId = PropertiesService.getScriptProperties().getProperty('MASTER_SHEET_ID');
  var ss = SpreadsheetApp.openById(sheetId);
  var flowers = [], items = [];
  
  var flowersSheet = ss.getSheetByName('FLOWERS_LIVE');
  if (flowersSheet) {
    var fData = flowersSheet.getDataRange().getValues();
    var fHeaders = fData[0];
    for (var i = 1; i < fData.length; i++) {
      if (!fData[i][0]) continue;
      var obj = {};
      for (var j = 0; j < fHeaders.length; j++) if (fHeaders[j]) obj[fHeaders[j]] = fData[i][j];
      flowers.push(obj);
    }
  }
  
  var itemsSheet = ss.getSheetByName('ITEMS_LIVE');
  if (itemsSheet) {
    var iData = itemsSheet.getDataRange().getValues();
    var iHeaders = iData[0];
    for (var i = 1; i < iData.length; i++) {
      if (!iData[i][0]) continue;
      var obj = {};
      for (var j = 0; j < iHeaders.length; j++) if (iHeaders[j]) obj[iHeaders[j]] = iData[i][j];
      items.push(obj);
    }
  }
  return { flowers: flowers, items: items };
}

// ── JSON Builder ──
function buildProductJSON_(catalog, stockData) {
  var stock = stockData ? stockData.stock : {};
  var flowers = [];
  
  for (var i = 0; i < catalog.flowers.length; i++) {
    var f = catalog.flowers[i];
    var sku = String(f['SKU']).replace('.0', '').trim();
    var skuStock = stock[sku];
    if (stockData && !skuStock) continue;
    
    var tier = String(f['Tier'] || '').trim().toUpperCase();
    if (['EXOTIC', 'PREMIUM', 'AAA+', 'AA', 'BUDGET'].indexOf(tier) < 0) continue;
    
    var name = String(f['Strain'] || '').trim().replace(/[\u{1F525}\u{2728}]?\s*SALE$/u, '').replace(/\?SALE$/, '').replace(/\s*\(?\s*AAA\+?\s*ON\s*SALE\s*\)?\s*$/i, '').replace(/\s*\(?\s*AAA\+?\s*SALE!?\s*\)?\s*$/i, '').replace(/\s*\bON\s*SALE\s*$/i, '').trim();
    if (!name) continue;
    
    var typeRaw = String(f['Type'] || 'hybrid').trim().toUpperCase();
    var typeInfo = detectType_(typeRaw);
    
    var p3g = parsePriceCell_(f['Price_3G']), p5g = parsePriceCell_(f['Price_5G']), p14g = parsePriceCell_(f['Price_14G']), p28g = parsePriceCell_(f['Price_28G']);
    
    if (skuStock) {
      if (!skuStock['3g'] || skuStock['3g'] <= 0) p3g = null;
      if (!skuStock['5g'] || skuStock['5g'] <= 0) p5g = null;
      if (!skuStock['14g'] || skuStock['14g'] <= 0) p14g = null;
      if (!skuStock['28g'] || skuStock['28g'] <= 0) p28g = null;
    }
    if (!p3g && !p5g && !p14g && !p28g) continue;
    
    var isHot = typeInfo.isHot, isSale = typeInfo.isSale;
    var isHotRaw = String(f['IsHot'] || '').trim().toUpperCase();
    var isSaleRaw = String(f['IsSale'] || '').trim().toUpperCase();
    if (isHotRaw === 'TRUE' || isHotRaw === 'YES' || isHotRaw === '1') isHot = true;
    if (isSaleRaw === 'TRUE' || isSaleRaw === 'YES' || isSaleRaw === '1') isSale = true;
    if ((p3g && p3g.sale !== null) || (p5g && p5g.sale !== null) || (p14g && p14g.sale !== null) || (p28g && p28g.sale !== null)) isSale = true;
    
    flowers.push({ sku: sku, name: name, slug: slugify_(name), tier: tier, type: typeInfo.type, isHot: isHot, isSale: isSale, thc: parseThc_(f['THC']), price3g: p3g, price5g: p5g, price14g: p14g, price28g: p28g, image: String(f['ImageURL'] || '').trim() });
  }
  
  var items = [];
  for (var i = 0; i < catalog.items.length; i++) {
    var it = catalog.items[i];
    var sku = String(it['SKU'] || '').trim();
    if (!sku) continue;
    
    var skus = sku.split(','), inStock = false;
    if (!stockData) {
      inStock = true;
    } else {
      for (var s = 0; s < skus.length; s++) {
        if (stock[skus[s].trim().replace('.0', '')]) { inStock = true; break; }
      }
    }
    if (!inStock) continue;
    
    var name = String(it['Name'] || '').trim();
    if (!name) continue;
    
    var priceStr = '', priceRaw = it['Price_EACH'];
    if (priceRaw !== null && priceRaw !== undefined && String(priceRaw).trim()) {
      var p = parsePriceCell_(priceRaw);
      if (p && typeof p === 'object') priceStr = p.sale !== null ? '$' + p.sale : '$' + p.regular;
      else if (p) priceStr = '$' + p;
      else priceStr = String(priceRaw).trim();
    }
    
    items.push({ sku: sku.replace(/\.0/g, '').trim(), name: name, slug: slugify_(name), category: String(it['Category'] || 'ADD ONS').trim().toUpperCase(), type: String(it['Type'] || '').trim(), thc: String(it['THC'] || '').trim(), mg: String(it['MG'] || '').trim(), price: priceStr, image: String(it['ImageURL'] || '').trim(), promoImage: String(it['PPromoimageurl'] || it['PPromo'] || '').trim() || null });
  }
  return { flowers: flowers, items: items };
}

// ── Web App Endpoint ──
function doGet(e) {
  var action = (e && e.parameter && e.parameter.action) || '';
  
  // ── Delivery Email Waitlist ──
  if (action === 'delivery_email') {
    var email = (e.parameter.email || '').trim().toLowerCase();
    var store = (e.parameter.store || 'UNKNOWN').trim();
    if (!email || email.indexOf('@') < 0) {
      return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: 'Invalid email' })).setMimeType(ContentService.MimeType.JSON);
    }
    return ContentService.createTextOutput(JSON.stringify(saveDeliveryEmail_(email, store))).setMimeType(ContentService.MimeType.JSON);
  }
  
  // ── Product API (existing) ──
  var store = (e && e.parameter && e.parameter.store) || 'ALC01';
  var stockOnly = e && e.parameter && e.parameter.stock === '1';
  var catalogOnly = e && e.parameter && e.parameter.catalog === '1';
  var result;
  
  if (stockOnly) {
    result = parseOnhandEmail(store);
  } else if (catalogOnly) {
    result = buildProductJSON_(fetchMasterCatalog_(), null);
  } else {
    var stockData = parseOnhandEmail(store);
    result = buildProductJSON_(fetchMasterCatalog_(), stockData);
    result.storeCode = store;
    result.stockDate = stockData ? stockData.date : null;
  }
  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
}


// ── Delivery Waitlist ──
function saveDeliveryEmail_(email, store) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName('DELIVERY_WAITLIST');
  
  // Create sheet if it doesn't exist
  if (!sh) {
    sh = ss.insertSheet('DELIVERY_WAITLIST');
    sh.appendRow(['Timestamp', 'Email', 'Store', 'Source']);
    sh.getRange('1:1').setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  
  // Check for duplicate (same email + same store)
  var data = sh.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][1]).trim().toLowerCase() === email && String(data[i][2]).trim() === store) {
      return { status: 'ok', message: 'Already registered', duplicate: true };
    }
  }
  
  // Map store code to readable name
  var storeNames = {
    'CHC01': 'Castle Heights Cannabis',
    'SCC01': 'Spirit Corner Cannabis',
    'ALC01': 'Always Lit Cannabis',
    'BLS01': 'Blouds Cannabis',
    'CVC01': 'Cafe Value Cannabis',
    'GDC01': 'Greendeal Cannabis'
  };
  
  sh.appendRow([new Date().toISOString(), email, store, storeNames[store] || store]);
  Logger.log('Delivery waitlist: ' + email + ' (' + store + ')');
  return { status: 'ok', message: 'Email saved', duplicate: false };
}


// ── Multi-Store Deploy Trigger ──
function triggerVercelDeploy_(storeCode) {
  var hooksStr = PropertiesService.getScriptProperties().getProperty('STORE_HOOKS');
  if (!hooksStr) return false;
  var hookUrl = JSON.parse(hooksStr)[storeCode];
  
  if (!hookUrl || hookUrl.indexOf('PASTE_YOUR') >= 0) {
    Logger.log('Skipping deploy: No valid hook for ' + storeCode);
    return false;
  }
  
  try {
    var response = UrlFetchApp.fetch(hookUrl, { method: 'post', muteHttpExceptions: true });
    return response.getResponseCode() >= 200 && response.getResponseCode() < 300;
  } catch (err) {
    return false;
  }
}

// ── The Daily Sync Loop ──
function dailySync() {
  var hooksStr = PropertiesService.getScriptProperties().getProperty('STORE_HOOKS');
  if (!hooksStr) return;
  var stores = Object.keys(JSON.parse(hooksStr));
  
  for (var i = 0; i < stores.length; i++) {
    var storeCode = stores[i];
    Logger.log('=== Daily Sync: ' + storeCode + ' ===');
    
    var stockData = parseOnhandEmail(storeCode);
    if (!stockData) continue; // No email found, skip
    
    var lastProcessedKey = 'LAST_PROCESSED_' + storeCode;
    var lastProcessed = PropertiesService.getScriptProperties().getProperty(lastProcessedKey);
    
    if (lastProcessed === stockData.date) {
      Logger.log('Already processed this email for ' + storeCode + '. Skipping deploy.');
      continue;
    }
    
    if (triggerVercelDeploy_(storeCode)) {
      PropertiesService.getScriptProperties().setProperty(lastProcessedKey, stockData.date);
      Logger.log('Deploy triggered successfully for ' + storeCode + '!');
    }
  }
}

// ── Utility Functions ──
function slugify_(name) { return name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/[\s-]+/g, '-').replace(/^-+|-+$/g, ''); }
function parsePriceCell_(val) {
  if (val === null || val === undefined) return null;
  var s = String(val).trim().replace(/\$/g, '').replace(/,/g, '');
  if (!s || s === '-' || s === 'N/A' || s === 'None') return null;
  if (s.indexOf('|') > -1) {
    var parts = s.split('|');
    var reg = parseFloat(parts[0].trim()), sal = parseFloat(parts[1].trim());
    if (isNaN(reg)) return null;
    return { regular: Math.round(reg), sale: isNaN(sal) ? null : Math.round(sal) };
  }
  var n = parseFloat(s);
  return isNaN(n) ? null : { regular: Math.round(n), sale: null };
}
function parseThc_(val) {
  if (val === null || val === undefined) return '';
  var s = String(val).trim().replace('%', '');
  if (!s || s === '-' || s === 'None') return '';
  var n = parseFloat(s);
  if (isNaN(n)) return s;
  if (n < 1) n = Math.round(n * 100); else n = Math.round(n);
  return n + '%';
}
function detectType_(typeStr) {
  var t = typeStr.trim().toUpperCase(), isSale = t.indexOf('SALE') >= 0, isHot = t.indexOf('HOT') >= 0;
  var base = t.replace('SALE', '').replace('HOT', '').trim(), type = 'hybrid';
  if (base.indexOf('I') === 0 || base.indexOf('INDICA') >= 0) type = 'indica';
  else if (base.indexOf('S') === 0 || base.indexOf('SATIVA') >= 0) type = 'sativa';
  return { type: type, isSale: isSale, isHot: isHot };
}
