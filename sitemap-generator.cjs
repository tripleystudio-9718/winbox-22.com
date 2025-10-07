const fs = require('fs');
const path = require('path');

// Configuration
const DOMAIN = 'https://www.winbox22.com';
const OUTPUT_FILE = 'public/sitemap.xml';

// Define all routes with their priorities and change frequencies
const routes = [
  // Main English routes
  { path: '/', priority: '1.0', changefreq: 'daily' },
  { path: '/winbox-login', priority: '0.9', changefreq: 'weekly' },
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
  
  // Game Category Pages
  { path: '/slot', priority: '0.8', changefreq: 'weekly' },
  { path: '/sports-betting', priority: '0.8', changefreq: 'weekly' },
  { path: '/live-casino', priority: '0.8', changefreq: 'weekly' },
  { path: '/ekor-lottery', priority: '0.8', changefreq: 'weekly' },
  { path: '/horse-racing-rcb988', priority: '0.8', changefreq: 'weekly' },
  
  // Slot game routes
  { path: '/acewin', priority: '0.6', changefreq: 'monthly' },
  { path: '/jili', priority: '0.6', changefreq: 'monthly' },
  { path: '/lucky365', priority: '0.6', changefreq: 'monthly' },
  { path: '/spadegaming', priority: '0.6', changefreq: 'monthly' },
  { path: '/playtech', priority: '0.6', changefreq: 'monthly' },
  { path: '/pragmatic-play', priority: '0.6', changefreq: 'monthly' },
  { path: '/askmeslot', priority: '0.6', changefreq: 'monthly' },
  { path: '/microslot', priority: '0.6', changefreq: 'monthly' },
  { path: '/monkeyking', priority: '0.6', changefreq: 'monthly' },
  
  // Sports betting routes
  { path: '/maxbet', priority: '0.6', changefreq: 'monthly' },
  { path: '/cmd368', priority: '0.6', changefreq: 'monthly' },
  { path: '/9wickets', priority: '0.6', changefreq: 'monthly' },
  { path: '/bti', priority: '0.6', changefreq: 'monthly' },
  
  // Live casino routes
  { path: '/evolution', priority: '0.6', changefreq: 'monthly' },
  { path: '/ezugi', priority: '0.6', changefreq: 'monthly' },
  { path: '/sv388', priority: '0.6', changefreq: 'monthly' },
  { path: '/hotroad', priority: '0.6', changefreq: 'monthly' },
  { path: '/sexy-live-casino', priority: '0.6', changefreq: 'monthly' },
  { path: '/asia-gaming', priority: '0.6', changefreq: 'monthly' },
  { path: '/big-gaming', priority: '0.6', changefreq: 'monthly' },
  { path: '/db-gaming', priority: '0.6', changefreq: 'monthly' },
  { path: '/pretty-gaming', priority: '0.6', changefreq: 'monthly' },
  
  // Lottery routes
  { path: '/ekor', priority: '0.6', changefreq: 'monthly' },
  
  // Horse racing routes
  { path: '/rcb988', priority: '0.6', changefreq: 'monthly' },
  
  // Legal pages
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-and-condition', priority: '0.3', changefreq: 'yearly' },
  { path: '/responsible-gaming', priority: '0.3', changefreq: 'yearly' },
];

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

// Function to write sitemap to file
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
    console.log(`Sitemap generated successfully: ${OUTPUT_FILE}`);
    console.log(`Total URLs: ${allRoutes.length}`);
    console.log(`Domain: ${DOMAIN}`);
    
    // Log summary
    const englishRoutes = routes.length;
    const chineseRoutesCount = chineseRoutes.length;
    console.log(`\nSummary:`);
    console.log(`English routes: ${englishRoutes}`);
    console.log(`Chinese routes: ${chineseRoutesCount}`);
    
    // Log game categories
    console.log(`\nGame Categories:`);
    console.log(`- Slot games: 9 providers`);
    console.log(`- Sports betting: 4 providers`);
    console.log(`- Live casino: 9 providers`);
    console.log(`- Lottery: 1 provider`);
    console.log(`- Horse racing: 1 provider`);
    
  } catch (error) {
    console.error('Error generating sitemap:', error);
    process.exit(1);
  }
}

// Function to validate routes against router configuration
function validateRoutes() {
  console.log('Validating routes...');
  
  // All routes that should be in the sitemap based on router
  const routerPaths = [
    '/', '/winbox-login', '/winbox-register', '/winbox-promotion', 
    '/download', '/chat', '/contact-us', '/about', '/blog', 
    '/amanda-lim', '/michael-ong', '/bwf-winbox-partnership', 
    '/brand-ambassador', '/privacy-policy', '/terms-and-condition', 
    '/responsible-gaming',
    // Game categories
    '/slot', '/sports-betting', '/live-casino', '/ekor-lottery', '/horse-racing-rcb988',
    // Slot games
    '/acewin', '/jili', '/lucky365', '/spadegaming', '/playtech', 
    '/pragmatic-play', '/askmeslot', '/microslot', '/monkeyking',
    // Sports
    '/maxbet', '/cmd368', '/9wickets', '/bti',
    // Live casino
    '/evolution', '/ezugi', '/sv388', '/hotroad',
    '/sexy-live-casino', '/asia-gaming', '/big-gaming', '/db-gaming', '/pretty-gaming',
    // Lottery
    '/ekor',
    // Horse racing
    '/rcb988'
  ];
  
  const sitemapPaths = routes.map(r => r.path);
  const missing = routerPaths.filter(p => !sitemapPaths.includes(p));
  const extra = sitemapPaths.filter(p => !routerPaths.includes(p));
  
  if (missing.length > 0) {
    console.warn('Routes in router but missing from sitemap:', missing);
  }
  
  if (extra.length > 0) {
    console.warn('Routes in sitemap but not in router:', extra);
  }
  
  if (missing.length === 0 && extra.length === 0) {
    console.log('All routes are synchronized!');
  }
}

// Main execution
if (require.main === module) {
  console.log('Starting sitemap generation...');
  validateRoutes();
  writeSitemap();
}

module.exports = {
  generateSitemap,
  writeSitemap,
  validateRoutes,
  routes: allRoutes
};