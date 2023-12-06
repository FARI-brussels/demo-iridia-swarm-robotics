import http.server
import socketserver
import subprocess

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/connect_to_robots':
            try:
                subprocess.run(['./connect_to_robots.sh'], check=True)
                self.send_response(200)
                self.send_header('Content-type', 'text/html')
                self.end_headers()
                self.wfile.write(b'Connected to robots successfully!')
            except subprocess.CalledProcessError:
                self.send_error(500, 'An error occurred while executing the script.')
        else:
            return http.server.SimpleHTTPRequestHandler.do_GET(self)

PORT = 8090

with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
    print("serving at port", PORT)
    httpd.serve_forever()
