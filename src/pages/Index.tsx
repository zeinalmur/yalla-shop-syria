import { ShoppingBag, Store, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold text-foreground">يلا شوب سوريا</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">الرئيسية</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">المتاجر</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">المنتجات</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">العروض</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">تسجيل الدخول</Button>
            <Button size="sm">إنشاء حساب</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            <span>أكثر من 1000+ متجر نشط</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            تسوق من أفضل
            <span className="text-primary"> المتاجر السورية</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            منصة يلا شوب سوريا تجمع أفضل المتاجر والمنتجات في مكان واحد. اكتشف آلاف المنتجات بأفضل الأسعار.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-lg px-8">
              ابدأ التسوق الآن
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              افتح متجرك
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">1,200+</div>
              <div className="text-muted-foreground">متجر نشط</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">50,000+</div>
              <div className="text-muted-foreground">منتج متوفر</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-success" />
              </div>
              <div className="text-3xl font-bold text-foreground">100,000+</div>
              <div className="text-muted-foreground">عميل سعيد</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-warning" />
              </div>
              <div className="text-3xl font-bold text-foreground">500,000+</div>
              <div className="text-muted-foreground">طلب مكتمل</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 يلا شوب سوريا. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
