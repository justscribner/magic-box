FROM node:carbon

# Create app directory
WORKDIR /usr/src/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

ENV PORT=8089
ENV PGHOST=db
ENV PGUSER=postgres
ENV PGDATABASE=eight_bit
EXPOSE 8089
CMD ["npm", "install"]
CMD ["npm", "start"]