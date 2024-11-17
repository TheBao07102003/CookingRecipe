import React from "react";
import TopRecipeCard from "../../Component/cardTopRecipe";
import Appetizer from "../../Component/Appetizer";
import MainCourse from "../../Component/MainCourse";
import SoupOrSalad from "../../Component/SoupOrSalad";
import Dessert from "../../Component/Dessert";
import { NavLink } from "react-router-dom";

const Home = () => {
  // Dữ liệu các công thức với hình ảnh và tên
  const recipes = [
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/8c14/4073/01d3892d4a9d6581d8e53941bf47fb66?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FTvjJGi5pwilksWHpG5Y6IQI83KFyqyxNBEvZ0SmWmoMJHEWLtOLzLGkeEcuAJOVmUB3cZyVqhH6IHWas-Q5b04hzeHl5-Xiq83ysJUR1KB47TrbIGzecjtCrdz3A8W-6-pXCADcLxdn8x8~j0S~HaFWK5j1pzKfA7EhPZciOCAzhiQJWukfIbKfrwM9C9bXvdmhFJMeYxrvgjQJh6wQots5uLNkeIffPpp4WKxYq2RBE1-KPWgWOI1MCwiy0fGNYivWcVhh4oI4qTBxZJym-2tUB4d9RhD4qzXxP-ehQN4rLZ-qmjXXm-nGnbDuqb8AIJX7dDEP-FAs8z87r6K34A__",
      recipeName: "California Crunch Bowl",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/59c5/10aa/26faa4fd8c71001e65ccdefb67f972d8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GyrHVZM7thAoAVl93r-vjgGZv9tCIVvlMVoHKcWcNQSEB6ZTxQROSc1d51MbTZK6cOZgEwXOSN8TEpujoiJEfo5M-5Xk02nFVkIOqpFGQnkuEEigMKOM5m8L3phEjv5u8mcq9cvdTjiZIDCLr1u2dV6NspRJ8LFgN94NSIQhfxwhRDhTZXaXr9iYO1aBdDO59f0sBZThy6cBpJYQxLCydsf7JUzkB377~z9olod8-qKamaONj-bQl0cgRa36vmevQWDXSH5i4LYV8OoIWRnnvWKTHR8eu6qvFDZqMeUJQCQFvJeq2u-hJuZ3CBoot6t4HbOZfHwzE40qb-j8qfmZhA__",
      recipeName: "Shrimp Alfredo",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/ff85/fb65/1cceafc8b646be54d09f8995c664b37b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mtgyouv4LGh7eJdcVhuDIgEPq3ZRue47NKHVWzgQp5-OfbT7LNFG~lQ8TQcr4GbqBF2j7Olu4-gXqj1~ynU8Ln31M0kI4p-ORTjOrgg1i-~zeGhHmtZLQjQ4UrWgz8MZseg9rlYEqJmb2L7DJu-I4ZDpJSqZSXeXNXIzKbzpg25zBWU-WMPSV~RJ9rI5XiX4mqmPtfjgkAH5EPvaaJ6LbqXNqwG8e~ijwJ6XUN1CyMS~rsajTRhUPTcgc4o2ZBXiG0dl78NJLm8lQqYdOJRxI7CJQFCIW56XVUDTM-5MJ7H2ipUGAvYxFyT~f9LTUmsWtKECy~f4EgLXi4L1-JOZmA__",
      recipeName: "Panna Cotta",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/acd3/35a4/7f34e31021529171acaea46d4d54b25c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A-4c37ssNHRGlmkXTVU9ke1iQJ4AJKsuJdSwuxzdMGueT1Sh-UMaNhYraVgV5xWapMATI0A~7Y7FDdWIH657gcCWwZfr4~Wp-epFG2xl0jp6MAdby0dISv~1GBMnfs~aSTBXcfy-iBuSJ1~CoofnLRa8OBcc9r0vrn5QD4WuDLCAyrjOVVvUlxmMJV~dM~TRQt0ZnVL2E5HlWQe7ZOUfId8hOKn3ZK-GgA3gp8XHrb7bS6q-mCICrI6AAmf2gcTLComCSGwxZ9c2-hfv3xKGr0nSDcXi873Rji1lS1PU5q8MBrtVb1xbC7gFuVlP~I67fGo-Zn8jEa3ROd-VaQgV6Q__",
      recipeName: "Creme Brulee",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/c380/6af0/1e21d74348f6f19364402f698ccb3da8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TQdWWgKkUkWYt9Qy4pvZ-xUfOJdHQqMFYdRYsHASi0abWo7fiTxaIiuXc7eCHId2ZonKPfZkIgs9CcehH4oFfWS4wUBTb2xZ8VL~gba7VjxSS9dC9Dt~mzGzkAtAfWTZWqCWqLHLEu0RtstJvyF8EQHpvB~HPy4Tz4rz~eXYj7gzqJ8cBobASa5m0knHa0RZ1SpOT6txktVpDbRjJJuQo~7xvsXLgLpZ3X0l5-kUp9k7IlPAaWcW4h5AkzbwSYqREclF~TCDpGOVezn7i68w7jlA1h-odZF20kJ1SNQAb7bl9Zd0ot4ZhkNfzMePivvtjNmsAUbKGfebRuoYJ1huOw__",
      recipeName: "Bun Bo",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/d778/253f/af6dbd1944725fce76cbafa57bb8c151?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KQa~EMKyowAD2fJkie1RY7NHwkMSBw1FGpX48p82E65VKHZUeIgcXm8ooH8z55MWHpd-A3rQkOYhe02g4T09ezXQ0gDQOmwdub-8I21i9E2cVdVINJ6hUix6E31RdaozPyhb90HjR7NgcHCswElmlL~NABdyTxWqXs2movpjDjDa~zdPhbSGBGQuO2da3t5Xl7BiMCYoi-gawgyDmGytXRjSJF97W4Jz2qFlHIQUkp1LZmACr5Q8ZLjF22qZiIKZWqD7VTvvAVwbNCVT1yyE02KsGzRLP-09x7h1DIXjswEWCoGp9a0e1FEVFklIRlZo4WUurpZieUm2LZBhckChFg__",
      recipeName: "Tokbokki",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/cd59/477d/8d3a029eda1156bcbc57aefa22d07bab?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gtinQbdZaihGM2yMVNFfBfBHIj9~1~wsoWI-~6gOs7ikg0zMXVpiOYWi8sXTq9d3K~~qq7cZKhuqzzpN-bO9q-hDljNiQ7rHU2CbkkOLopGrM6Qu912kj7tKUMozCTnWmsMzvgFFErlt0eiFGvKP51YUaruQPt-TNIfQobVFvof5~cllx5WH5xsScpyNw~UajLaU-a8XMfuIbemHcFVJTFqm6ZxAWTyzsbgAbZ58k1m9pdGY2ScMZEqnLz5FkYTWJaPYDiby-exk1f8HISuh8E2Ca8n1yrRlz~W0gRwW74azM76FVzV5w0E-YVe-LA0XPnNSQ3V9LwnoGcOSQsHQ6g__",
      recipeName: "Tempura Udon",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/5c18/6c4d/954280d12da6bdc63d6744f2edf1603d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FVdB3Y0oMbY4UNjg0TrE62uc7cNRm9Z8u0DIsjgXWqynP6Rq3km3VuqoKvdaLosiIxTH4kRr3pE3VuQ~5670LPagocmeaIb1GvTf7bU6rQeE0nDJy9G44h3G-~OVNg5thjDXQ4v64pRhuNa70gBBFjqlaZznOU8NiTpg44bvpB2MkoRCiWnH3F6RVuLCjvEcImfqJYUvilrSiPZfR8FTNCvCfaU36Cpl35lrS6bFW0SomLwIBEJOjfUlm8KcdGGbRb7f4ox9sq3fJf12BjxrxrIsDhCcm5VFPVtXfTJ2Mm6V2Tjb5Ss2coscFsGR8gHSbdOc1tTJpFQeIzIGhXXl3g__",
      recipeName: "The Duke Bowl",
    },
  ];
  const appetizers = [
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/7da5/fe18/a494621e814e93e7c721d2e778002523?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nTkH0uA8~m635NKJtAS9Eo-lNKM4QDVU9L2qaR2FtMjFx5vhxmniAdanKsm-5y3Mqd7UWrpDlFrbYji~ZPCi6DegAAFre-BirJtkqpGzOm8x622XzLliE~nb7mQbYnAP6VVAeDQYYkjbuwbluQPp4o1dWDQdlehvzYU22clnVDpv40Tb2V6fZjEqgxDexqnHysX~TUHMzbLt~T4qUAsgnafzwDdaA~u1QTCih557~oB3IV9rsNmrAiZYScwN7S8BxE6CLHRUw91jnLnQjuUgpkzAem234fuOKLsZRmRhnDRUdiaKvgKHDe~7FIeBom-Wz-jbX9ppKyVRD~VFzqAcIg__",
      title: "Vietnamese spring rolls",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/5191/04a4/71af74f917bda4a01a78450ccee10248?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XJDCrbAzuCWuI13iHxenqdHfN4IF3QECao829XRzC95-ED84b334T1RfmO-vcW7C8l7UsniSQkUAUXDceyzevuNGeFg2-loJVTtnYqZ6p58a06OhScBxLzWGd4qIqWjDArj4Q8SSe58EEsZhD5NEwIIGFRurHMl1bYIZknR6S6QcEqk9fofRcHQvh8ZgsofFArfQlN2JpW28usIjMhFdoFURdk9VC32XfeuvUn67r-ODOMoGdqXPPrK1HirBAvVDcQREEHi78Kjf1QR3rDx4RWCouIrIFJw4TstM3SW1baHzeBXiZeO005uHQ7b65GqTELcxfGxYwgl5WUX6q1aBAA__",
      title: "Edamame",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/c866/f0da/05da8c1f6382953a6e66c2e8cb953bec?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gG4F1KuaKck-GQwRoGQ9K0tPnt5-dlbZ7V~iQ8sybkr0nXKbTP7O8zp3bZGsGgn8j8Qla7RgfIohJw0mgeQm8nas9JYdAFdQP25HaxbD~aoPSItw2N7zJdUtma2aiu3QV~4Q7rxcDnMliB0XxLlCtEZvlwHFYMVRWUUROlTLWQOWRrG96zQPyfMiqaXLJR-tMNAc4MM0WTpHSLWULOxkOlos24ec-HlVrSvBADGD3~8HsbFuy0jXQ40F0ZoaWlvBWxWh2WpYLCP2aYX1GnjEHcUX7ohFnbB4M9l-j~Bfwfxb6ab0MQEBOH0pLr5ShznZ7kjEZFjXlOJoAbkV1OzZug__",
      title: "Satay",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/17f1/4be0/09b57a373073ac4058eae7e8d7a2c78b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LDpl-NDYX55cJaigTK0Qrz7eLqqzO2~OrUlTyL5ske4kVF2bU3nYttINoio9tM9cp4laU62AXkqUHwDL7UvIKeccgNCTlmUE9c23zrdjwqrOXu6G4K~4XkgeHzmn~DN-aeiRdYXpcQpVF3flCVBWVl8bRhdBG3Gn32lgyXEob4fNw2aaE~NaqdoLfmac2LcQX2riKAbIDGJud~9k7RJRgPdqs6IxvFo8Xs2OFbKTkgbnNK0r1pDL~ni-dwakaC4TMDoQF8rVni~gfU2ua8QoM-M1Nj4vCzzEx87F0oIf6sdKZ8GzbS8QWDk1YR2O9qvdFe0DZqe056LyyI77UU8XNA__",
      title: "Vietnamese Fry Spring rolls",
    },
  ];
  const maincourse = [
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/18a9/5bb9/1c773cb1935aba04e78f46d6c1f48277?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l9OCivdik2ZWh5EDAr0KXfn9NGKIAWEuEwDVX~iJt09DFppprxiJu2djgZOqWKCgOpb~AncOBVnJC-SE2t~GxR01rvv8Sff7-PUf3ZwEI4Y0Rg-Y9ypjJJtrg6pkDdoatAMF1HV06LLZ~y2CkdXOSaEhhZXAdb2UXJcvFdTFYD9~ceg8RTY~30kuQ7l~PzNaFDYeDkbvs~mHOamiudXfO5dQfSr6FmbBHKjG1AL2SPj3hOGmH9JMq8CVjly1vf8H6xYnZorQddOxnJt8lgRsnVo2EDgnZWNWLvhMSjPCB0ndvokylfxbceP0cud1MQ~nDJNmpKJD~jxnuak3PprubQ__",
      title: "Pad Thai",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/79dd/8a64/82476a1e97f787b6169af14ce1458589?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ViFlMms4nb4~sg94kKrJdQ30~rfJKeaJr9IgwjG8j8YmnOswHYRWH-p5gC7bNboUwV~nobfj2sNxfZD3MqP6JY1s1-S-tHnVJi2uYvDbQTiLje3NMLK-z5w0c4SSbB6eG4z~ceKKbQXrWkVv0phi6z8dmRRwl8KfTaSNdgJF~y68Lf3iZM7JIbpSSZhvkJrVkAuKbNxjHslY5mZ3CLNiLZFd2QKeQ8ab6hqMuie75JMbqvvY78H9arqKf-PUSLvG561JXbD7Oiz9DHh0R2GTvcuBG8f2LlqDXHYlyMMIkaKKUvnF9623wno7EYqZlabvhBTYpgP2iGzrSXp5xVBKnA__",
      title: "Sushi",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/79dd/8a64/82476a1e97f787b6169af14ce1458589?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ViFlMms4nb4~sg94kKrJdQ30~rfJKeaJr9IgwjG8j8YmnOswHYRWH-p5gC7bNboUwV~nobfj2sNxfZD3MqP6JY1s1-S-tHnVJi2uYvDbQTiLje3NMLK-z5w0c4SSbB6eG4z~ceKKbQXrWkVv0phi6z8dmRRwl8KfTaSNdgJF~y68Lf3iZM7JIbpSSZhvkJrVkAuKbNxjHslY5mZ3CLNiLZFd2QKeQ8ab6hqMuie75JMbqvvY78H9arqKf-PUSLvG561JXbD7Oiz9DHh0R2GTvcuBG8f2LlqDXHYlyMMIkaKKUvnF9623wno7EYqZlabvhBTYpgP2iGzrSXp5xVBKnA__",
      title: "Green Curry",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/0579/3844/b45bd26fac696cc38f6fa6de9339f562?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X3yULIH5~36mFKgcuD8nSV1OP9TaZul7xoxgb6nI6dtWeaCRzT~2dJuWKHLtEl4v46jtslKmuZ02y50xMeOI7M2Bpa6bXZtm4bcRXMMXQla7mmyFhNUWcwjVGFDRR2gbR5rx-973ZcKJdmrSkVCzjS5OEDArs0hEEmmqn8OH9krEZyeo05ZKYEybDOh-kUoKqEP2SlWJwOhoQ4SpcoiuXnugerwjAdqokwCHD9wDUfbFtN3-iif~ePXsJUph66ldKI7UCXos~r7AcDmdFECUNZLLnBbCI4WsaI0-TiT7sKeEVQqJ5614LeQFAOLdnT0pP2I17y3xWE-lMv6P2k2O6w__",
      title: "Bulgogi",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/0829/638e/1796ee4bb1773dd0b05b2bbb3195da02?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OLpfRdFsSe61OT3XCPwTiG5h5o4zMFWk7cxzr6TQciFFjEWfZlmVDJrH521qicwJWWZPZLjflN~Pjvfh6sgVIl4ZRfQlsOrUMmwfyyrgmloUm62hdIPsYC69Cwx~HtZEEhtIZAzo628PcZoU6TIQ-2u8hAPozzYdlwZQWzA5wkDULVON5-3WR00AOo-pPoED3GEeTLt4bbRs-cYd0pVIDtZ8YlmZns-gXQevchVhttf5gny8eHABpKLStRYMyKLsZ5sAJBywbhVyFJl2Zv9TLxnl0pH-ur~-eqWJR3zcsLPWBob5xTyuqv7x6vWEwqXYOKO5x~tt~z~UnOCp0X0tug__",
      title: "Kimbap",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/2c7a/32df/a827e9c12f5c7b8896a695dc48bccea2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kUu~JYtDkF83~QZsE1zN9SuPiebnBq82oFjpKTrwIFG3j6kvEPUu4ptKuGQ9qf1GdqJpyrMZBARZDAOLJw2~0lWF1cptJT9ugbBY~o-QsLmGW2v9953u27TwYgOiRAeYQfOqzadINx9oJLQmQH7Pm4mfsK0vCCNXsiA7BksifkBWsQvPQnZQLUhzDGPrLQiRj8vg72HAUoUA4ACXhdYQ8WHqskIH6NUev68JLSWkHhvBFFZlaFBvDBG8dj8XGBaF-Zt0w8QEbj-~nIeoReyp0uluNaOI1NMLFuNx2E0tWHReDUJJpofhAoo64okV8NsSLK4hbwqNA2N5Kjhw3gMkcA__",
      title: "Vietnamese Braised Pork",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/e077/e804/1ba579c1e7e3926f6208d027e1403042?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oAkRZfjz~lbfMQbiLwzCj4flhwBgevYYQvxP4f55BZ2RYlsHq9rGAjwq6ZD~J5vdEJ5-HXYtycHb3pDETnBoBYXnCPPA3cY4pFtILKozQqG05E3ddlccJXCHAq7meZ7YJEoNZA~VhI1kX01EAaX5THMnLXW7UYGfFnRJXXT6AnbvbSeQRi75f9I8ksr5Pk34MB2aVErrWkzo4rdxRz6lN9qGZ0bycJ8g~03jgqpENJoFX1p~hYicCnmxAAznyicP7AViw9n-sFGXxt9URlle3zU4Fs32-w9X5FT305A2cZehFEbL8uNaqKRc0osK0TmwqpgwEL3Iw0M3coRvMaGbJQ__",
      title: "Braised Fish with Pepper",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/c327/5db4/0652d02db5c8769cec45630a823fecf9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Li5xAsgpnn7xtrNxt-J9rNOXMuDleo7vJ~y2O7WiJnerQ7q-B-K2hCn3VAD7z29o0UKR9UYj8NZwQcg~XWcoQmJ~SsEWGRhSERQSObq6-625L-N5-s81tK1B6VyKxmFAS7i0eRakxecKNnUfmfB4rPsIzGyZ7IqbcZdMP32DNoCGZc5BHNpvGzSiJN2hb8YD7kMhz62ZsUpvXD5FOsN~zpuq5TDJPIOKUDEdw9rwk~YUEJSmanHlFM4lfJnsUOw4yuUlUfHkg-7r9X3N4QGNAN21XVpmIXA8F9czpN876cz6so~Vda8Azs~qJy-s-cXHklEZFSckFXrx5FWL0nY-kQ__",
      title: "Salmon Bowl",
    },
  ];
  const soupsalad = [
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/5da6/a645/5c52ef155535862a466a4bbb90f31c24?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sg3D30iD3OnkNsroKxAevNgqN46S5ig5VUd77yIx~SPxeSl6kcpCqUts9q7g5CTWMGN4iFTCZc0OcU-y7zJO4hrNZ7lkkgu3ZplXYA4EZwAHmhG7KGL8xeOaBiT-q7g1~mscD5Q~-8WWUYp5QlmgYMVrlqv1Tn9Yhfm0mc3E-nUUn81Lj7Jz9V0zMkmhL85b-jK61UB5AbVxIVqBSfXqJ8AdlH-MeAZaxTvZ98glZXDoYa77Ac77-bhq~st-~0ysYdswJr5cIn~gFVH88XNK92UkpEbN8g7WhorQ7-SVeA8TygYex6HHOKbcjM2mt~AjLtDkFPOA8sB52Dst7Yd~Vg__",
      title: "Canh Chua",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/29b2/9e76/a35ce27edcbba0902f6b1e1f5afc8604?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YHjm4pqlgqRlkV1OP6ol8~ftmK5ew~aAuVeA4k1AI4wODKqJp6blS8i6lUwJfKwdtoZmsXcPqIkcp~Uki8wI0kJCZ63qr7Ki4JDjSoptDA81JkHMDJO0FycwWZzrXhfbS1Feh-S11osH8qcy6OLvJMdTJ6jHja9mvzoa~QTFbzw6Cwmgrp5vT8s~jh4PQGP97KkDTGy4KLJLiqbtPip2Yk1HzvTn~tyE0CJoc2guVI9G0xQ6z3sAvb9TUv~bQcrQgQz64IpjaivP1e5~B6e8mGTHAFIJ1gbTR0iX0QX9~C2yQkhLxIfchLZlNEPoMyLyixTCwSgZZ1fkYPPGU4EYbQ__",
      title: "Pho",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/c380/6af0/1e21d74348f6f19364402f698ccb3da8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TQdWWgKkUkWYt9Qy4pvZ-xUfOJdHQqMFYdRYsHASi0abWo7fiTxaIiuXc7eCHId2ZonKPfZkIgs9CcehH4oFfWS4wUBTb2xZ8VL~gba7VjxSS9dC9Dt~mzGzkAtAfWTZWqCWqLHLEu0RtstJvyF8EQHpvB~HPy4Tz4rz~eXYj7gzqJ8cBobASa5m0knHa0RZ1SpOT6txktVpDbRjJJuQo~7xvsXLgLpZ3X0l5-kUp9k7IlPAaWcW4h5AkzbwSYqREclF~TCDpGOVezn7i68w7jlA1h-odZF20kJ1SNQAb7bl9Zd0ot4ZhkNfzMePivvtjNmsAUbKGfebRuoYJ1huOw__",
      title: "Bun Bo",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/c4cf/167c/92570d00300e8c35cdfc657fda9b34da?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LE~iJHMBNcTYPjiTlDhjqM3HC5jEKZTkriOwGftINFMQCvmKab4CpgYCFOdHa7k8YNu7AmquSOZrJJ1FdG~0AzuusTt-5M7g2sM9LKhjgXU7m2gXSFYV76Hgzls0wsjXbYnBg1Iao6IVi5aE9RubGCfZTn7-NAGTlh051f3k~ZEjY7HDAzmYtLZv9IXE6YMuShOuzb9Hf4vmVdajfxw9xFMJSlfvyqpzRKPJD5WfUzr~n7Mu0olutw7cA3NK9FTo3RAFqYpFEBER2nqDyFVgBE1f6-HtFiO05Bi5-2D8Oey-RpGrD46Nyy~lPsmasYMo9WfBKOeAotSt595PVcY7tQ__",
      title: "Banh Canh Cua",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/f1a5/6c64/76a86227473f1971455d85722a66fe88?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gl3cemb8hlN-GY8I1oV6LAQipgylSoNREOuZQhZOq4mvx-wu0AZEyxT6qPJDZVRBzhyfP7Fze3Og1rUHblVVXy~XdpamiPEqxMN4Xa09s9RBDGsKnD6Umuc2GX6VrhMXeH93vRjD52vMs0jF9aXsif~UbYhbjf-KoLMwYuoeZ1HhsAGDwWv2gcGpinE9~gSoOM1j1s5gqNPDsIwhBXoIlTrcjqYgfeU7cOWi7u50xMB2fteSQDH7f5OUhlJhN6pWhS-CMzwwz3NvAk~08eH83trKVHfibFfKBFmXLp7YtwI0EdY9gjH8Xg-FIBCYAvyaDEH1toRwfox6pzK8KAmETw__",
      title: "Kachumber Salad",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/82be/1c79/017603798ed0e94bb4fefe553e773fdf?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j-nqXBi2gBf6dVw0egixYUPOmzUNWM7EwUrtNqobOrD8HyCF9kXkx7MXvaf6vNaCY47Nb1oVVknYgHePzANBAzkz2zETup0Fm5JRzhbHDkWayhxFGlGPUjNIJ2LVCzK1MUcutnGutb-xC8FB0hgZN7fpSxidpVwfJzuBcVA4P~7pM~~x4rShFpzLYWKpC2~PLHETEnCh1Rr0xJ651zVRCYgJuTMruSMY2HGmpufqU~LMQqVgY7uG75lf-fviVa0xSsdKnZsoULvRuyAAJhd57Pd546KcWSud6CFtsW~ANYFZ0etltIsSA66PwmHTZcRj6MmF8Lqr9OJtUJZ9KkbIIQ__",
      title: "Kimchi Jjigae",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/e4f2/3505/7c2f8366ab0fbc0da54cfe7010c85f39?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=duqmp6WuZGT3JgDfmRfqtojSdZd1T5CjOfnNhdA-f64qd1dmnwuL-Tis2XQlc-wlozD5Xj2tnJEfKxs-gwDZFP8BVLWdV59MSHoAbfBOXt5exBjj2PX9GNPFqp2KKnD4U~eUyzsWGOSDtpVYtIgD~OdLt6zLK90GObke9Gd2A2HuC0sq~dMK8gGl0B7FIM4pNDjF3FQZbfoDRQulsfqbDrQWNW1c8PTH4GvZZe9X4tgBc2iMgeFVGRZgJIG7jXRyAUvyC2gyZ58xpjuQjz~ZjJvm8GOYCRHWv8VlYqZWZFtZ4C-cSxlQ6-DAtD3kqJzaa1~Z0Q7P3VioxVB4Fi7xFg__",
      title: "Miso Soup",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/7014/2f0e/de1f4a0d01a6dd89e7b904571d0d2b0c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CqGtkq5eMoYDxxJaOQ8ztydqSedu6AeqPQtt8rEm1h4LcYvhFML~V~0~2nRepjADAapTQ9uC9KdTo3hlD0TzSuyF7xKcE62RDrkAqkITe9paHSKYyjLDiUs4d6DR1YAqVep~4N8glsjbD1HbpHBIqhBknxJRxyEefhIVEXrfSnBgj~kZgRDjrSDCQIkWwm0QRSPoIV~mWFvVoRCy7L8iYmzMRsjv9oPjuEty6eSBXcXTSH3Qq4rtaj9D43OW8W8zNeSRe~Jq4sAJh-s5Qgkzlk17bQDvBfBpi0Z9JrYtQxsge5hS8JkiZg~3d~6-yii2wIg5gEWsU0pkNL6CKm9kxA__",
      title: "Wonton Soup",
    },
  ];
  const dessert = [
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/ff85/fb65/1cceafc8b646be54d09f8995c664b37b?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mtgyouv4LGh7eJdcVhuDIgEPq3ZRue47NKHVWzgQp5-OfbT7LNFG~lQ8TQcr4GbqBF2j7Olu4-gXqj1~ynU8Ln31M0kI4p-ORTjOrgg1i-~zeGhHmtZLQjQ4UrWgz8MZseg9rlYEqJmb2L7DJu-I4ZDpJSqZSXeXNXIzKbzpg25zBWU-WMPSV~RJ9rI5XiX4mqmPtfjgkAH5EPvaaJ6LbqXNqwG8e~ijwJ6XUN1CyMS~rsajTRhUPTcgc4o2ZBXiG0dl78NJLm8lQqYdOJRxI7CJQFCIW56XVUDTM-5MJ7H2ipUGAvYxFyT~f9LTUmsWtKECy~f4EgLXi4L1-JOZmA__",
      title: "Panna Cotta",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/acd3/35a4/7f34e31021529171acaea46d4d54b25c?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A-4c37ssNHRGlmkXTVU9ke1iQJ4AJKsuJdSwuxzdMGueT1Sh-UMaNhYraVgV5xWapMATI0A~7Y7FDdWIH657gcCWwZfr4~Wp-epFG2xl0jp6MAdby0dISv~1GBMnfs~aSTBXcfy-iBuSJ1~CoofnLRa8OBcc9r0vrn5QD4WuDLCAyrjOVVvUlxmMJV~dM~TRQt0ZnVL2E5HlWQe7ZOUfId8hOKn3ZK-GgA3gp8XHrb7bS6q-mCICrI6AAmf2gcTLComCSGwxZ9c2-hfv3xKGr0nSDcXi873Rji1lS1PU5q8MBrtVb1xbC7gFuVlP~I67fGo-Zn8jEa3ROd-VaQgV6Q__",
      title: "Creme Brulee",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/57b9/1886/ec8217b789873c8ddb600ef4eb4f9f72?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pa4h9TctwXmcJTnG8aEyOGkcS1Wy8TxHsW~hT7nPMvLss9UszPoOkEcyZuzzIDxbirYLH~CC6CvOF8ghiBYEfnjjYfhM8lyLYuUe4cJD5-zWDAIONTf6s~inSr9J70QgpppegcVipvIWs4hFZ-euevZty6l6KJwayd8IkXv07YjJAZHHiKhQdN5cqJfjwYq7vHAP-qGlSd0LGhs7-O25vOQGeVjwOZMJXlNVA-iufZ7PuKy56XvBeL2p3Bc-9CqX~yD6wm6xb3H1FPB54MY-fdn-SEUlm8dDmXT1aFAC~lPphu415IPw5Vu6oYKSl~9I4ZwIs3kAOIBCy3PuEUbmNA__",
      title: "Mango Sticky Rice",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/00b3/e400/dd9e5eee4070086d681a1bf3eabcffbb?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X00UTPtaPvBtLyuQouPID8DkqkIbdTzmGLqCya2JM1mo1kxiPoT1SfLUKApm6wsw11yyOtWkltTcBC0zCndkHKKIA9wHqTuKCIQ3XeTy65utT1fpYmvinGnUbWMbFlGnXDgTN9rVMLmVFMUnycmd2KctWk5TUW85YJevh1w5KOgeEW2ZeaY6m2OnrmX3msJK5Pa-Z5Th69NMc1DYTuXfniIP9Q144N~Ng5Zl92wSGpMmIbuoilr3xBvkfLOf3ESMblUQkJhRgXbbHpe~W2sseJnGbX6HnyFCpwfUW0YE~u~kzjVeeu-gpL8whKDlBBiDkRWjfL8cJqoDbKbppmauwQ__",
      title: "Gulab Jamun",
    },
  ];
  //khi click nó sẽ roll lên đỉnh trang
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <img
        src="https://s3-alpha-sig.figma.com/img/31a6/24c4/51e10218b20d7fa4a19ac166848433c9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mlgZXLSkN5ZD0wV9eOalFav0eK~Ddw3g2Jhtk5kKG3SX7dX6NP41XCFZfbpuMejggEgQFxIcxmi4t5JLwiqaGggvaqx5U6jsS~hiXqWV4RNqosD5aTicPaCu7Sbjx3eO3ePdpVHbsY6vjXrcLqBQbX0HlaCVa2J6J56Esi7XHYMpS7szXed5LUMLjm0nNNX70Z75o-6518Z2cPJjl6sLmWkJTdTxsFTWmWhLHj4GRepX7iXg9nvyk77crs08fClTuLbA8unZL~bfnDGPwUXcAS7reeP5R506jhhHIvJNfmVfRSFZszBxyV8LWwlRQ0IfXd9Vrlmlp1NbGMsTfenTQA__"
        alt="ảnh 1"
        style={{
          width: "100%",
          height: "450px",
          objectFit: "cover",
          display: "block",
        }}
      />
      <div
        style={{
          textAlign: "center",
          color: "#593329",
          fontSize: 52,
          fontWeight: "900",
          wordWrap: "break-word",
        }}
      >
        Our top recipes
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Chia màn hình thành 4 cột đều
          gap: "20px", // Khoảng cách giữa các cột
          padding: "20px",
          backgroundColor: "#f9f9f9",
          marginTop: "10px",
        }}
      >
        {recipes.map((recipe, index) => (
          <TopRecipeCard
            key={index}
            imageSrc={recipe.imageSrc}
            recipeName={recipe.recipeName}
          />
        ))}
      </div>
      <div
        style={{
          textAlign: "center",
          color: "#593329",
          fontSize: 52,
          fontWeight: "900",
          wordWrap: "break-word",
        }}
      >
        Recipes by four-course meal
      </div>
      <div
        style={{
          color: "#593329",
          fontSize: 34,
          fontWeight: "900",
          marginLeft: "7%",
          wordWrap: "break-word",
        }}
      >
        Appetizer
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Chia màn hình thành 4 cột đều
          gap: "20px", // Khoảng cách giữa các cột
          padding: "20px",
          marginTop: "10px",
        }}
      >
        {appetizers.map((appetizer, index) => (
          <Appetizer
            key={index}
            imageSrc={appetizer.imageSrc}
            title={appetizer.title}
          />
        ))}
      </div>
      <div
        style={{
          color: "#593329",
          fontSize: 34,
          fontWeight: "900",
          marginLeft: "7%",
          wordWrap: "break-word",
          marginTop: "15px",
        }}
      >
        Main Course
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Chia màn hình thành 4 cột đều
          gap: "20px", // Khoảng cách giữa các cột
          padding: "20px",
          marginTop: "10px",
        }}
      >
        {maincourse.map((maincourse, index) => (
          <MainCourse
            key={index}
            imageSrc={maincourse.imageSrc}
            title={maincourse.title}
          />
        ))}
      </div>
      <div
        style={{
          color: "#593329",
          fontSize: 34,
          fontWeight: "900",
          marginLeft: "7%",
          wordWrap: "break-word",
          marginTop: "15px",
        }}
      >
        Soup or Salad
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Chia màn hình thành 4 cột đều
          gap: "20px", // Khoảng cách giữa các cột
          padding: "20px",
          marginTop: "10px",
        }}
      >
        {soupsalad.map((soupsalad, index) => (
          <SoupOrSalad
            key={index}
            imageSrc={soupsalad.imageSrc}
            title={soupsalad.title}
          />
        ))}
      </div>
      <div
        style={{
          color: "#593329",
          fontSize: 34,
          fontWeight: "900",
          marginLeft: "7%",
          wordWrap: "break-word",
          marginTop: "15px",
        }}
      >
        Dessert
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // Chia màn hình thành 4 cột đều
          gap: "20px", // Khoảng cách giữa các cột
          padding: "20px",
          marginTop: "10px",
        }}
      >
        {dessert.map((dessert, index) => (
          <Dessert
            key={index}
            imageSrc={dessert.imageSrc}
            title={dessert.title}
          />
        ))}
      </div>
      <div style={{ display: "flex", marginTop: "5%" }}>
        <div style={{ width: "55%", marginLeft: "15%" }}>
          <div
            style={{
              color: "#593329",
              fontSize: 48,
              fontWeight: "900",
              wordWrap: "break-word",
            }}
          >
            Our happy food lovers
          </div>
          <div
            style={{
              color: "#593329",
              fontSize: 24,
              fontWeight: "400",
              width: "65%",
              marginTop: "15%",
            }}
          >
            I find cooking easy, and I believe you can do it too. Let’s share
            these recipes, and together we’ll create wonderful dishes filled
            with love and all our senses.
          </div>
          <div
            style={{
              color: "#593329",
              fontSize: 24,
              fontWeight: "700",
              wordWrap: "break-word",
              marginTop: "10%",
            }}
          >
            CookCook
          </div>
        </div>
        <div style={{ width: "45%" }}>
          <img
            src="https://s3-alpha-sig.figma.com/img/07cd/b95d/408d0f8b61224e5886dfc104c54308b7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdEkzjoEaRRBCspiqPd2EhFDZiCS8U~zf0Um9poTa21Ecc4To9~GSRFGOSJzHn4QsMW3zWLTdhlAqCThniTanEugfxUL~y8GMtTgorspcpVa8mjZglo3O7Qzw5PAZD8UGZ-n~j6nRY8zR0CwgIm9JU913GMSGCjo-j2KcELTuFMdbwj5OCdjW-1aJhZ2oh4zArA7gcavPJ3D79Mc2PP49G7ncUyBUiqyWVnzkzO-19-lQvz6qDQ7-5mVmgiN5MnplZQBrD6zMit2hsWbkoZBySddS~TCdtkftGdKmA4Z7S1Kc7pVtNuJ3QxNGem2Dt-8pHdZh8bcxLJpMgUkCFF9nA__"
            alt="cake"
            style={{
              height: "445px",
              width: "75%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#d2691e",
            borderRadius: "10px",
            padding: "20px",
            width: "80%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className="text-content"
            style={{
              color: "#4b2e2e",
            }}
          >
            <h1
              style={{
                margin: 0,
                fontSize: 40,
              }}
            >
              Find our story
            </h1>
            <p
              style={{
                fontSize: "1em",
                margin: "20px 0",
                width: "55%",
              }}
            >
              Cooking knows no gender, wealth, or social status. It is a
              passion, a source of life, and simply a way to inspire others each
              day. Join us and embrace the value of every dish together.
            </p>
            <button
              className="button"
              style={{
                backgroundColor: "#4b2e2e",
                color: "#ffffff",
                padding: "12px 60px",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                fontSize: "1em",
                marginTop: "2%",
              }}
            >
              Let's find out
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            backgroundColor: "#5A352D",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              display: "inline",
              fontSize: "36px",
              color: "#FFC86E",
              marginLeft: "10px",
              verticalAlign: "middle",
            }}
          >
            CookCook
          </h1>
          <div style={{ marginTop: "13px" }}>
            <NavLink
              to="/"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                margin: "0 15px",
                fontSize: "16px",
              }}
              activeStyle={{
                color: "#F4B400",
              }}
              onClick={scrollToTop} // Cuộn trang lên khi nhấp
            >
              Home
            </NavLink>
            <NavLink
              to="/OurStory"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                margin: "0 15px",
                fontSize: "16px",
              }}
              activeStyle={{
                color: "#F4B400",
              }}
              onClick={scrollToTop} // Cuộn trang lên khi nhấp
            >
              Our story
            </NavLink>
            <NavLink
              to="/Recipes"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                margin: "0 15px",
                fontSize: "16px",
              }}
              activeStyle={{
                color: "#F4B400",
              }}
              onClick={scrollToTop} // Cuộn trang lên khi nhấp
            >
              Recipes
            </NavLink>
          </div>
          <div
            style={{
              color: "white",
              fontSize: 14,
              fontWeight: "400",
              wordWrap: "break-word",
              marginTop: "16px",
            }}
          >
            © 2024 Brand, Inc. • Privacy • Terms • Sitemap
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
