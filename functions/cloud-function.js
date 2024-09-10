export default function handler(_, res) {
  console.log("process.env", JSON.stringify(process.env))
  res
    .status(200)
    .json({ deploymentIdentifier: "contentfly-deployment-agent-dev-deploy:7bb9b38cf1f1:run-counter-2" })
}