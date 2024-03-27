import { Box, Image, SimpleGrid, Stack } from "@mantine/core";
import { DesignSectionCard } from "../DesignSectionCard";

export const DesignSection = () => {
  return (
    <Stack gap="xl">
      <Box component="section">
        <Image src="/design-mobile.webp" hiddenFrom="md" h={500} />
        <Image src="/design-desktop.webp" visibleFrom="md" h={500} />
      </Box>
      <SimpleGrid component="section" cols={{ base: 1, md: 2 }} spacing="xl">
        <DesignSectionCard
          title="Muebles de Interiores"
          subTitle="Desde sólo $30"
          description="¡Renueva tu hogar! Descubre nuestra colección de muebles elegantes y funcionales."
          url="#"
          imageUrl="/indoor-chair.webp"
        />
        <DesignSectionCard
          title="Muebles de Exteriores"
          subTitle="Desde sólo $45"
          description="¡Crea un oasis al aire libre con nuestros muebles duraderos y modernos!"
          url="#"
          imageUrl="/outdoor-chair.webp"
        />
      </SimpleGrid>
    </Stack>
  );
};
