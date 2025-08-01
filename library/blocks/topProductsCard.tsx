import {
  CardRoot,
  CardTitle,
  CardDescription,
} from "@/library/components/ui/card";
import { cx } from "@/lib/utils";
import Image from "next/image";
import React from "react";

function TopProductCard({
  products,
  className,
}: {
  products: {
    id: number;
    image: string;
    title: string;
    orders: string;
    price: number;
  }[];
  className?: string;
}) {
  return (
    <CardRoot
      className={cx(
        // base
        "w-full p-0",
        // className prop
        className
      )}
    >
      <CardTitle className="p-6">Top Selling Products</CardTitle>
      <CardDescription className="">
        <p className="px-6 pb-2 flex items-baseline justify-between text-xs font-bold text-gray-500">
          <span>PRODUCT</span>
          <span>VALUE</span>
        </p>
        {products.map((product) => (
          <CardRoot
            key={product.id}
            className="my-2 p-2 px-6 border-0 border-t rounded-none text-sm font-normal text-gray-800 dark:text-gray-100 flex items-baseline-last justify-between"
            showShadow={false}
          >
            <div className="flex gap-4">
              <Image
                src={product.image}
                className="border rounded"
                width={32}
                height={34}
                alt="product"
              />
              <div>
                <p className="">{product.title}</p>
                <small className="text-xs font-semibold">
                  {product.orders} orders
                </small>
              </div>
            </div>
            <span>{`$${product.price}`}</span>
          </CardRoot>
        ))}
      </CardDescription>
    </CardRoot>
  );
}

export default TopProductCard;
