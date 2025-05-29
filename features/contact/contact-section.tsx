import { ContactForm } from "./components/contact-form";
import { Container } from "@/components/layout/container";
export function ContactSection() {
  return (
    <section id="contact" className="py-16">
      <Container>
        <div className="container px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Contact Me
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl">
              I am always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I will try my
              best to get back to you!
            </p>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
