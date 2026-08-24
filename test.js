const { chromium } = require('playwright');
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading index.html');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

server.listen(8080, async () => {
    console.log('Server running on port 8080');

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    let errors = [];
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(msg.text());
        }
    });
    page.on('pageerror', error => {
        errors.push(error.message);
    });

    try {
        await page.goto('http://localhost:8080');
        await page.waitForTimeout(2000); // Wait for canvas drawing and three.js init
        if (errors.length > 0) {
            console.error('Errors found:', errors);
            process.exit(1);
        } else {
            console.log('No console errors found. Game loads successfully!');
        }
    } catch(e) {
        console.error('Exception during test:', e);
        process.exit(1);
    } finally {
        await browser.close();
        server.close();
        process.exit(0);
    }
});
