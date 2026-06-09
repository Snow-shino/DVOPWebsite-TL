FROM nginx:latest

# Remove default Nginx site files so only project files are served.
RUN rm -rf /usr/share/nginx/html/*

# Copy all static site files, not just index.html.
COPY . /usr/share/nginx/html
