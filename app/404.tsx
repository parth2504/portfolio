export default function Custom404() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var path = window.location.pathname;
            path = path.replace(/\/$/, '');
            window.location.replace(path);
          })();
        `,
      }}
    />
  )
}