import { WineDetail } from "src/components/frontend";
import { getWine } from "utils/content-util";

const Wine = (props): JSX.Element => {
  const { wine } = props;
  return <WineDetail wine={wine} />;
};

export default Wine;

export async function getStaticProps(context) {
  const id = context.params.id;
  const wine = await getWine(id);

  if (!wine) {
    return { notFound: true };
  }

  return {
    props: { wine },
  };
}

export async function getStaticPaths() {
  return {
    paths: ["/vina/cabernetsauvignon"],
    // fallback: true,
    fallback: "blocking",
  };
}
