const SocialLinks = ({ href, iconClass, itemClass }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" class={itemClass}>
        <i class={iconClass}></i>
      </a>
    </li>
  );
};
export default SocialLinks;
