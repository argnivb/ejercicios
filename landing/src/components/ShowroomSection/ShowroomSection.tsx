import { Image, Stack } from "@mantine/core";

export const ShowroomSection = () => {
  return (
    <>
      <Stack gap="xs" visibleFrom="md">
        <Image
          src="/showroom/showroom-desktop-1.webp"
          h={370}
          w="100%"
          fit="contain"
        />
        <Image
          src="/showroom/showroom-desktop-2.webp"
          h={370}
          w="100%"
          fit="contain"
        />
        <Image
          src="/showroom/showroom-desktop-3.webp"
          h={370}
          w="100%"
          fit="contain"
        />
      </Stack>
      <Stack gap="xs" hiddenFrom="md">
        <Image
          src="/showroom/showroom-mobile-1.webp"
          h={370}
          w="100%"
          fit="contain"
        />
        <Image
          src="/showroom/showroom-mobile-2.webp"
          h={370}
          w="100%"
          fit="contain"
        />
        <Image
          src="/showroom/showroom-mobile-3.webp"
          h={370}
          w="100%"
          fit="contain"
        />
      </Stack>
    </>
  );
};
