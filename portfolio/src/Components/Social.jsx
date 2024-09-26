const Social = ({ padding }) => {
  return (
    <>
      <div className={`${padding} social-icns`}>
        <ul className="flex gap-x-4">
          <li>
            <a href="https://github.com/adityajadonsingh">
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/aditya-jadon-47a9261a4/">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_adityajadon__?utm_source=qr&igsh=eW5tYWFncmVvYWVl">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Social;
