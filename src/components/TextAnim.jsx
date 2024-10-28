export default function TextAnim() {
  const text = "Welcome";

  return (<>
  <h1 className="overflow-hidden text-9xl font-bold leading-loose text-white">
    {text.match(/./gu).map((char, index) => (
      <span
      className="animate-text-reveal inline-block [animation-fill-mode:backwards]"
      key={`${char}-${index}`}
      style={{animationDelay: `${index * 0.05}s`}}
  >
    {char === " " ? "\u00A0" : char}
  </span>
  ))}
  </h1>
</>
)
  ;
};