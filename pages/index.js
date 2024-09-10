export const Home = () => {
  const envVariable = process.env.NEXT_PUBLIC_TEST_VARIABLE;

  return (
    <div >
      {envVariable === "TEST_VALUE" && <p>contentfly-deployment-agent-dev-deploy:7bb9b38cf1f1:run-counter-2</p>}
    </div>
  )
}
export default Home
