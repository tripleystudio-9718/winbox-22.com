const fs = require('fs');
const path = require('path');

// Configuration
const DOMAIN = 'https://www.winbox22.com';
const OUTPUT_FILE = 'public/sitemap.xml';

// Define all routes with their priorities and change frequencies
const routes = [
  // Main English routes
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/winbox-login-web', priority: '0.9', changefreq: 'weekly' },
  { path: '/winbox-register', priority: '0.9', changefreq: 'weekly' },
  { path: '/winbox-promotion', priority: '0.8', changefreq: 'daily' },
  { path: '/download', priority: '0.8', changefreq: 'weekly' },
  { path: '/chat', priority: '0.7', changefreq: 'monthly' },
  { path: '/contact-us', priority: '0.7', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/blog', priority: '0.6', changefreq: 'monthly' },
  { path: '/amanda-lim', priority: '0.6', changefreq: 'monthly' },
  { path: '/michael-ong', priority: '0.6', changefreq: 'monthly' },
  { path: '/bwf-winbox-partnership', priority: '0.6', changefreq: 'monthly' },
  { path: '/brand-ambassador', priority: '0.6', changefreq: 'monthly' },
  
  // Slot game routes
  { path: '/acewin', priority: '0.6', changefreq: 'monthly' },
  { path: '/jili', priority: '0.6', changefreq: 'monthly' },
  { path: '/spadegaming', priority: '0.6', changefreq: 'monthly' },
  { path: '/playtech', priority: '0.6', changefreq: 'monthly' },
  { path: '/pragmatic-play', priority: '0.6', changefreq: 'monthly' },
  { path: '/askmeslot', priority: '0.6', changefreq: 'monthly' },
  { path: '/microslot', priority: '0.6', changefreq: 'monthly' },
  { path: '/monkeyking', priority: '0.6', changefreq: 'monthly' },
  
  // Legal pages
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-and-condition', priority: '0.3', changefreq: 'yearly' },
  { path: '/responsible-gaming', priority: '0.3', changefreq: 'yearly' },
];

// Additional URLs to add (from the image requirements)
const additionalEnglishUrls = [
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-and-condition', priority: '0.3', changefreq: 'yearly' },
  { path: '/blog', priority: '0.6', changefreq: 'monthly' }
];

// URL changes to handle (old -> new mappings)
const urlChanges = {
  '/winbox-download-apk/': '/download',
  '/contact/': '/contact-us'
};

// Generate Chinese routes (lower priority as per SEO best practices)
const chineseRoutes = routes.map(route => ({
  path: `/zh${route.path === '/' ? '' : route.path}`,
  priority: '0.1',
  changefreq: 'monthly'
}));

// Combine all routes
const allRoutes = [...routes, ...chineseRoutes];

// Function to get current date in YYYY-MM-DD format
function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

// Function to generate sitemap XML
function generateSitemap() {
  const currentDate = getCurrentDate();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  allRoutes.forEach(route => {
    sitemap += `
  <url>
    <loc>${DOMAIN}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Function to write sitemap to file and handle redirects
function writeSitemap() {
  try {
    const sitemapContent = generateSitemap();
    
    // Ensure the public directory exists
    const publicDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Write sitemap file
    fs.writeFileSync(OUTPUT_FILE, sitemapContent, 'utf8');
    console.log(`✅ Sitemap generated successfully: ${OUTPUT_FILE}`);
    console.log(`📊 Total URLs: ${allRoutes.length}`);
    console.log(`🌐 Domain: ${DOMAIN}`);
    
    // Log URL changes that need to be handled
    console.log('\n📝 URL Changes to implement:');
    console.log('From <loc>https://www.winbox22.com/winbox-download-apk/</loc> change to <loc>https://www.winbox22.com/download/</loc>');
    console.log('From <loc>https://www.winbox22.com/contact/</loc> change to <loc>https://www.winbox22.com/contact-us/</loc>');
    console.log('\n🇨🇳 Same for zh chinese:');
    console.log('From <loc>https://www.winbox22.com/zh/winbox-download-apk/</loc> change to <loc>https://www.winbox22.com/zh/download/</loc>');
    console.log('From <loc>https://www.winbox22.com/zh/contact/</loc> change to <loc>https://www.winbox22.com/zh/contact-us/</loc>');
    console.log('\n🔄 And make redirect for:');
    console.log('"https://www.winbox22.com/zh/winbox-download-apk/" to "https://www.winbox22.com/zh/download/"');
    console.log('"https://www.winbox22.com/zh/contact/" to "https://www.winbox22.com/zh/contact-us/"');
    console.log('\n📄 For EN add these URLs:');
    console.log('https://www.winbox22.com/privacy-policy');
    console.log('https://www.winbox22.com/terms-and-condition');
    console.log('https://www.winbox22.com/blog');
    console.log('\n🇨🇳 For ZH add these URLs:');
    console.log('https://www.winbox22.com/zh/privacy-policy');
    console.log('https://www.winbox22.com/zh/terms-and-condition');
    console.log('https://www.winbox22.com/zh/blog');
    
    // Log summary
    const englishRoutes = routes.length;
    const chineseRoutesCount = chineseRoutes.length;
    console.log(`\n📊 Summary:`);
    console.log(`📄 English routes: ${englishRoutes}`);
    console.log(`🇨🇳 Chinese routes: ${chineseRoutesCount}`);
    
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Function to validate routes against router configuration
function validateRoutes() {
  console.log('🔍 Validating routes...');
  
  // Check for any missing routes that might be in the router
  const routerPaths = [
    '/', '/winbox-login-web', '/winbox-register', '/winbox-promotion', 
    '/download', '/chat', '/contact-us', '/about', '/blog', 
    '/amanda-lim', '/michael-ong', '/bwf-winbox-partnership', 
    '/brand-ambassador', '/acewin', '/jili', '/spadegaming', 
    '/playtech', '/pragmatic-play', '/askmeslot', '/microslot', 
    '/monkeyking', '/privacy-policy', '/terms-and-condition', 
    '/responsible-gaming'
  ];
  
  const sitemapPaths = routes.map(r => r.path);
  const missing = routerPaths.filter(p => !sitemapPaths.includes(p));
  const extra = sitemapPaths.filter(p => !routerPaths.includes(p));
  
  if (missing.length > 0) {
    console.warn('⚠️ Routes in router but missing from sitemap:', missing);
  }
  
  if (extra.length > 0) {
    console.warn('⚠️ Routes in sitemap but not in router:', extra);
  }
  
  if (missing.length === 0 && extra.length === 0) {
    console.log('✅ All routes are synchronized!');
  }
}

// Main execution
if (require.main === module) {
  console.log('🚀 Starting sitemap generation...');
  validateRoutes();
  writeSitemap();
}

module.exports = {
  generateSitemap,
  writeSitemap,
  validateRoutes,
  routes: allRoutes
};