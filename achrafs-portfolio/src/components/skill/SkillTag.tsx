interface SkillTagProps {
  children: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  rounded?: string;
  className?: string;
}

export default function SkillTag({
  children,
  bgColor = "bg-skill-frontend",
  textColor = "text-page",
  fontSize = "text-sm",
  fontWeight = "font-medium",
  padding = "px-2 py-1",
  rounded = "rounded-md",
  className = "",
}: SkillTagProps) {
  const styles = `${bgColor} ${textColor} ${fontSize} ${fontWeight} ${padding} ${rounded} ${className}`;
  return <div className={styles}>{children}</div>;
}
