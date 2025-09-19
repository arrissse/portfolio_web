function Title({ text }: { text: string }) {
  return (
    <div className="title">
      <h3>Мамонова Алиса</h3>
      <h4>---------------</h4>
      <h1>{text}</h1>
    </div>
  );
}

export default Title;
