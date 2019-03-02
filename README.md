# Chatectron
Web socket implementation with Socket.io & Electron & React JS

## Building & Installing

Install npm packages. You may need `--unsafe-perm` parameter to instal `node-sass` without error in some linux disturbitions.
 
```shell
yarn install
```

Run development server. Use `yarn run dev` for production
```shell
yarn run dev
```

Run web server to bind socket connections in another tab. It will run in port 8081. You can it in `server.js` file.
```shell
node server
```

Run Electron in another tab.
```shell
yarn run start
```