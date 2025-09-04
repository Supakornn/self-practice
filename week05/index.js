const net = require("net");
const tls = require("tls");

function myOwnFetch(host, path = "/", port = 80, useHttps = false) {
    return new Promise((resolve, reject) => {
        const connectionModule = useHttps ? tls : net;
        const client = connectionModule.connect({ host, port }, () => {
            client.write(`GET ${path} HTTP/1.1\r\n`);
            client.write(`Host: ${host}\r\n`);
            client.write(`Connection: close\r\n`);
            client.write(`\r\n`);
        });

        let data = "";
        client.on("data", (chunk) => (data += chunk));
        client.on("end", () => {
            const [header, body] = data.split("\r\n\r\n");
            resolve({ header, body });
        });

        client.on("error", reject);
    });
}

myOwnFetch("potterapi-fedeperin.vercel.app", "/en/houses", 443, true)
    .then((res) => {
        // console.log("Headers:\n", res.header);
        console.log("Body:\n", res.body);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });
