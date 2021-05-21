import React from "react";
import { Element, Heading, Link, SubContainer } from "src/components/ui";

const HomeMoments = (): JSX.Element => {
  return (
    <SubContainer className="home-moments" as="section">
      <Heading className="home-moments__heading" as="h1">
        Podelite Vaše Momente Sa Nama
      </Heading>
      <Link
        className="home-moments__link"
        href="https://www.instagram.com/vinarijarnjak/"
      >
        @vinarijarnjak
      </Link>
      <Element as="div" className="home-moments__photo-stack">
        <figure>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;h=600&amp;q=50"
            width="1000"
            height="1000"
          />
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=600&amp;h=600&amp;q=50"
            width="1000"
            height="1000"
          />
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1497671954146-59a89ff626ff?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;h=600&amp;q=50"
            width="1000"
            height="1000"
          />
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;h=600&amp;q=50"
            width="1000"
            height="1000"
          />
        </figure>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600$h=600&amp;q=50"
            width="1000"
            height="1000"
          />
        </figure>
      </Element>
    </SubContainer>
  );
};

export default HomeMoments;
