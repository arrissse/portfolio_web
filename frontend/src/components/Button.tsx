function Button({ text, href }: { text: string; href: string }) {
  return (
    <div className="button">
      <a href={href}>&larr; {text}</a>
    </div>
  );
}

function MainButton() {
  return <Button text="На главную" href="/home"></Button>;
}

function getParentPath(path: string): string {
  const index = path.lastIndexOf("/");
  return index > 0 ? path.slice(0, index) : path;
}

function BackButton(cur_href: string) {
  const href = getParentPath(cur_href);
  return <Button text="Назад" href={href}></Button>;
}

export default MainButton;
export { BackButton };
