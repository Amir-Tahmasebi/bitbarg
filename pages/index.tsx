import Layout from "./../components/Layout";
import HomeComponent from "./../components/Home";
import client from "../services/client";
import HomeProps from "./../type/Home.type";

const Home = (props: HomeProps) => {
  return (
    <Layout>
      <HomeComponent {...props} />
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await client.get("/currencies");
  return {
    props: {
      ...res.data,
    },
  };
}

export default Home;
