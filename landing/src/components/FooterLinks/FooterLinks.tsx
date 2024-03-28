import { Container, Image, Text, Center } from "@mantine/core";
import classes from "./FooterLinks.module.css";

const data = [
  {
    title: "Menú",
    links: [
      { label: "Inicio", link: "#" },
      { label: "Catálogo", link: "#" },
    ],
  },
  {
    title: "Productos",
    links: [
      { label: "Hogar y decoración", link: "#" },
      { label: "Accesorios y bisutería", link: "#" },
      { label: "Calzado", link: "#" },
      { label: "Confecciones", link: "#" },
    ],
  },
  {
    title: "Más Productos",
    links: [
      { label: "Producciones editoriales", link: "#" },
      { label: "Útiles y componentes de produción artesanal", link: "#" },
      { label: "Muñequeria y juguetería", link: "#" },
      { label: "Instrumentos Musicales", link: "#" },
    ],
  },
  {
    title: "Cliente",
    links: [
      { label: "Términos y condiciones", link: "#" },
      { label: "Preguntas Frecuentes", link: "#" },
      { label: "Contáctenos", link: "#" },
    ],
  },
];

export const FooterLinks = () => {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner} size="xxl">
        <div>
          <Image src="/logo.webp" h="56" w="146" fit="fill" />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Center className={classes.afterFooter}>
        <Text size="sm">El Cairo @ 2024. Todos los derechos reservados</Text>
      </Center>
    </footer>
  );
};
