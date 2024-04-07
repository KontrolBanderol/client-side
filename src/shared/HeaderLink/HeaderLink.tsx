import Image from "next/image";
import Link from "next/link";
import arrowRightSmall from "@/../public/arrow-right-small.svg";
import css from './HeaderLink.module.scss'
type Props = {
  title: string;
  href: string;
  description: string;
  abbreviatedDescription?: string;
};

export default function HeaderLink({ title, href, description, abbreviatedDescription }: Props) {
  return (
    <div className={css.wrapper}>
      <h2>{title}</h2>
      <Link
        className={css.moreCategoryLink + " text-primary"}
        href={href}
      >
        {description}
        <Image alt="arrow icon" className={css.arrow} src={arrowRightSmall} width={24} height={24} />
      </Link>
      <Link
        className={css.abbreviatedMoreCategoryLink + " text-primary"}
        href={href}
      >
        {abbreviatedDescription}
        <Image alt="arrow icon" className={css.arrow} src={arrowRightSmall} width={24} height={24} />
      </Link>
    </div>
  );
}
