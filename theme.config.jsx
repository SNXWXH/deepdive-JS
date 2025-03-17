import { useRouter } from 'next/router';
export default {
  logo: <strong>Modern Javascript Deep Dive Book Study</strong>,
  project: {
    link: 'https://github.com/SNXWXH/deepdive-JS',
  },
  sidebar: {
    titleComponent({ title }) {
      return (
        <div
          style={{
            fontSize: '1.2rem',
          }}
        >
          {title}
        </div>
      );
    },
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === '/') {
      return {
        titleTemplate: 'Modern Javascript Deep Dive Book Study',
      };
    }
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='모던 자바스크립트 딥다이브 스터디' />
      <meta
        property='og:description'
        content='책을 읽고 정리하며 자바스크립트에 대한 개념과 심화를 익히는 것입니다.'
      />
    </>
  ),
};
