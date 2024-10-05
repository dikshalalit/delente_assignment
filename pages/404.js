import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <Link href="/">Go back to the homepage</Link>
    </div>
  );
}
