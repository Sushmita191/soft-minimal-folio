const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sushmita Rai. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
