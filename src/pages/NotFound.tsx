import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          الصفحة غير موجودة
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          عذراً، الصفحة التي تبحث عنها غير موجودة. قد تكون قد حُذفت أو تم نقلها.
        </p>
        <Button asChild>
          <Link to="/" className="inline-flex items-center gap-2">
            <Home className="w-4 h-4" />
            العودة للرئيسية
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
