import Image from "next/image";

import { Product } from "./products";

import styles from "./ProductCard.module.css";

import * as stylex from "@stylexjs/stylex";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  // return (
  //   <div className={styles.card}>
  //     <div className={styles.cardContainer}>
  //       <div className={styles.imageContainer}>
  //         <Image
  //           src={product.image}
  //           alt={product.title}
  //           width={300}
  //           height={300}
  //         />
  //       </div>
  //       <div className={styles.infoContainer}>
  //         <h1 className={styles.title}>{product.title}</h1>
  //         <p className={styles.price}>{product.price}</p>
  //       </div>
  //     </div>
  //   </div>

  // return (
  //   <div className={styles.card}>
  //     <div className="flex flex-col @md:flex-row">
  //       <div className="w-full @md:w-1/4">
  //         <Image
  //           src={product.image}
  //           alt={product.title}
  //           width={300}
  //           height={300}
  //           className="w-full h-auto rounded-tl-2xl rounded-tr-2xl @md:rounded-tr-none rounded-bl-none @md:rounded-bl-2xl"
  //         />
  //       </div>
  //       <div className={styles.infoContainer}>
  //         <h1 className={styles.title}>{product.title}</h1>
  //         <p className={styles.price}>{product.price}</p>
  //       </div>
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className={`${styles.card} bg-red-400`}>
  //     <div className={styles.cardContainer}>
  //       <div className={styles.imageContainer}>
  //         <Image
  //           src={product.image}
  //           alt={product.title}
  //           width={300}
  //           height={300}
  //           className={styles.image}
  //         />
  //       </div>
  //       <div className={styles.infoContainer}>
  //         <h1 className={styles.title}>{product.title}</h1>
  //         <p className={styles.price}>{product.price}</p>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div {...stylex.props(s.card)}>
      <div {...stylex.props(s.cardContainer)}>
        <div {...stylex.props(s.imageContainer)}>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            {...stylex.props(s.imageContainerImg)}
          />
        </div>
        <div {...stylex.props(s.infoContainer)}>
          <h1 {...stylex.props(s.title)}>{product.title}</h1>
          <p {...stylex.props(s.price)}>{product.price}</p>
        </div>
      </div>
    </div>
  );
};

const SMALL = "@container (max-width: 450px)";
const LARGE = "@container (min-width: 450px)";

const s = stylex.create({
  card: {
    containerType: "inline-size",
    width: "100%",
  },
  cardContainer: {
    display: "flex",
    width: "100%",
    flexDirection: {
      default: "row",
      [SMALL]: "column",
    },
  },
  imageContainer: {
    width: {
      default: "25%",
      [SMALL]: "100%",
    },
  },
  imageContainerImg: {
    width: "100%",
    height: "auto",
    borderTopRightRadius: {
      default: 0,
      [SMALL]: "1rem",
    },
    borderTopLeftRadius: "1rem",
    borderBottomLeftRadius: {
      default: 0,
      [LARGE]: "1rem",
    },
  },
  infoContainer: {
    width: {
      default: "75%",
      [SMALL]: "100%",
    },

    paddingLeft: "1rem",

    borderBottomWidth: 1,
    borderBottomColor: "#666",
    borderBottomStyle: "solid",

    borderRightWidth: 1,
    borderRightColor: "#666",
    borderRightStyle: "solid",

    borderBottomRightRadius: "1rem",
    borderBottomLeftRadius: {
      default: 0,
      [SMALL]: "1rem",
    },
    borderTopRightRadius: {
      default: 0,
      [LARGE]: "1rem",
    },

    borderTopWidth: {
      default: "inherit",
      [LARGE]: 1,
    },
    borderTopColor: {
      default: "inherit",
      [LARGE]: "#666",
    },
    borderTopStyle: {
      default: "inherit",
      [LARGE]: "solid",
    },

    borderLeftWidth: {
      default: "inherit",
      [SMALL]: 1,
    },
    borderLeftColor: {
      default: "inherit",
      [SMALL]: "#666",
    },
    borderLeftStyle: {
      default: "inherit",
      [SMALL]: "solid",
    },
  },
  title: {
    fontSize: "1.5rem",
    margin: "0",
    marginTop: "1rem",
  },
  price: {
    fontSize: "1rem",
    marginBottom: "1rem",
    fontStyle: "italic",
  },
});
