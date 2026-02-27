import parse from "html-react-parser";
import GallerySlider from "./components/GallerySlider";
import AmenitiesSlider from "./components/AmenitiesSlider";
import FAQSection from "./components/FaqSection";

export function ProjectContent({ html }) {
    return parse(html, {
        replace(node) {
            if (
                node.attribs &&
                node.attribs["data-component"] === "slider"
            ) {
                const images =
                    node.attribs["data-images"]?.split(",") ?? [];

                return <GallerySlider slides={ images } />;
            } else if (
                node.attribs &&
                node.attribs["data-component"] == "AmenitiesSlider"
            ) {
                const icons =
                    node.attribs["data-icons"]?.split(",") ?? [];

                const titles =
                    node.attribs["data-titles"]?.split(",") ?? [];

                const slides = icons.map((icon, index) => ({
                    icon: icon?.trim(),
                    title: titles[index]?.trim() ?? ""
                }));

                return <AmenitiesSlider slides={ slides } />
            } else if (
                node.attribs &&
                node.attribs["data-component"] == "faq"
            ) {
                const jsonText = node.children
                    ?.filter((child) => child.type === "text")
                    .map((child) => child.data)
                    .join("")
                    .trim();

                try {
                    const data = JSON.parse(jsonText);
                    return <FAQSection faqs={ data.items } />;
                } catch (e) {
                    console.error("FAQ JSON parse error", jsonText);
                    return null;
                }
            }
        },
    });
}