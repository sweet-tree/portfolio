import { Container } from "../container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} SweetTree by Dmitry Sevryukov. All rights
              reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
