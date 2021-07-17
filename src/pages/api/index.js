export default function handler(req, res) {
  res.status(200).json({
    repo: `${process.env.npm_package_name}`,
    version: `${process.env.npm_package_version}`,
    author: 'riflowth',
    homepage: `${process.env.npm_package_homepage}`
  })
}