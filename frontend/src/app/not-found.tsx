import Container from "@/components/Container";
import Empty from "@/components/Empty";

export default function Page404() {
  return (
    <Container>
      <Empty
        title="404: Not found"
        description="Ops... we didn't find this country information. Go back to the home page and search for other countries."
        hasLink
      />
    </Container>
  );
}
