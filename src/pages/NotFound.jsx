import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Sayfa bulunamadı</h2>
      <p>Sayfa bulunamadı</p>
      <Link to="/">Ana sayfaya dön</Link>
    </div>
  );
}
