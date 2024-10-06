import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  return (
    <div className={`app_container page_not_found_container`}>
      <h1 className="page_not_found_head">404</h1>
      <p className="page_not_found_para">Page Not Found</p>
      <button
        onClick={() => handleHome()}
        className="page_not_found_goback_btn"
      >
        Go to home
      </button>
    </div>
  );
}
