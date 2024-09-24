const Social = ({ padding }) => {
  return (
    <>
      <div className={`${padding} social-icns`}>
        <ul className="flex gap-x-4">
          <li>
            <a href="">
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Social;
