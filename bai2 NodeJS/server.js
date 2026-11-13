const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <h1>Xin chào!</h1>
        <h2>Ứng dụng Node.js đầu tiên</h2>
        <p>Họ và tên: HÀ VĂN SÂM </p>
        <p>Mã sinh viên: CD-CNTT18A24</p>
        <p>Server đang chạy tại cổng 3000</p>
    `);
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});