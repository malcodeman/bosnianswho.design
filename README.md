# bosnianswho.design 🇧🇦

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malcodeman/bosnianswho.design/blob/master/LICENSE)

Bosnians Who Design is a directory of accomplished Bosnians and Herzegovinians in the IT industry.

![Screenshot](readme/screenshot.png)

## Getting started

```
git clone https://github.com/malcodeman/bosnianswho.design
cd bosnianswho.design
yarn install
yarn dev
```

.env.development.local:

```
TWITTER_TOKEN=token
```

## Static file serving

Before running

```
yarn out
yarn serve
```

you need to remove `i18n` property from the `next.config.js` file because [internationalized routing does not integrate with next export](https://nextjs.org/docs/advanced-features/i18n-routing#how-does-this-work-with-static-generation).

## Index page `getStaticProps` explanation

### 1. Getting followers

```typescript
const followings = await listTwitterFollowings();
```

We run [GET /2/users/:id/following](https://developer.twitter.com/en/docs/twitter-api/users/follows/api-reference/get-users-id-following) endpoint to get a list of users the [@bosniansdesign](https://twitter.com/bosniansdesign) is following.

### 2. Getting usernames

```typescript
const usernames = splitEvery(
  100,
  map((item) => item.username, followings)
);
```

We split usernames into slices of 100 items each because of the `GET /2/users/by` endpoint usernames query parameter limit.

### 3. Getting info

```typescript
async function getTwitterDesigners(
  usernames: string[][],
  index: number,
  designers = []
): Promise<TwitterDesigner[]> {
  if (equals(index, length(usernames))) {
    return designers;
  }
  return getTwitterDesigners(
    usernames,
    inc(index),
    concat(await listTwitterDesigners(usernames[index]), designers)
  );
}

const twitterDesigners = await getTwitterDesigners(usernames, 0, []);
```

We run [GET /2/users/by](https://developer.twitter.com/en/docs/twitter-api/users/lookup/api-reference/get-users-by) endpoint to get `created_at,location,url,description,verified,profile_image_url,entities` information about users specified by their usernames.

### 4. Getting designer positions

```typescript
const designers = map((item) => {
  const description = split(" ", toLower(item.description));
  const positions = flatten(map((item) => item.value, constants.POSITIONS));
  const inter = intersection(description, positions);
  return {
    ...item,
    position: inter,
  };
}, twitterDesigners);
```

We map twitter users to assign appropriate positions based on twitter description.

### 5. Getting filter positions

```typescript
const positions = map((position) => {
  return {
    ...position,
    count: count(
      (designer) =>
        any((item) => includes(item, position.value), designer.position),
      designers
    ),
  };
}, constants.POSITIONS);
```

We map initial positions and run count function for every designer position.

## License

[MIT](./LICENSE)
