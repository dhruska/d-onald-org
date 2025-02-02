import Layout from "../components/layout";

export default () => (
  <Layout>
    <section>
      <ul>
        <li>Engineering Manager, New Products (AI + Mobile) at <a href='https://www.retool.com' target='_blank'>Retool</a></li>
        <li>Co-founder and VP Engineering at <a href='https://www.draftbit.com' target='_blank'>Draftbit</a>, <a href='https://techcrunch.com/2019/08/20/here-are-the-82-startups-that-launched-on-day-2-of-ycs-s19-demo-days/' target='_blank'>funded by YC</a></li>
        <li>Tech Lead at DRIVIN, <a href='https://reut.rs/2oL823l' target='_blank'>acquired by KAR Auction Services</a></li>
        <li>Software engineer at numerous startups and agencies</li>
        <li>Computer Engineering at UIUC</li>
      </ul>
    </section>
    <style jsx>{`
      section {
        flex: 1;
      }

      ul {
        list-style-type: none;
        padding-left: 0;
        font-size: 15px;
      }

      li {
        line-height: 1.35em;
        margin: 0.4em 1em 0;
        text-indent: -1em;
      }

      li:not(:first-child) {
        opacity: 0.55;
      }

      a {
        color: inherit;
      }
    `}</style>
  </Layout>
);
