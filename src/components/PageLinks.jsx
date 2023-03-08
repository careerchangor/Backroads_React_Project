const PageLinks = ({ href, text, itemClass }) => {
  return (
    <li>
      <a href={href} class={itemClass}>
        {" "}
        {text}{" "}
      </a>
    </li>
  );
};
export default PageLinks;
