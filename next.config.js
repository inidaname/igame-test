/** @type {import('next').NextConfig} */
const nextConfig = {
  env: getEnvConfig(),
  output: 'export',
};

function getEnvConfig() {
  const environment = process.env.TARGET_ENV || process.env.NODE_ENV;
  try {
    return require(`./env-${environment}.json`);
  } catch (err) {
    return require("./env-development.json");
  }
}

module.exports = nextConfig;
