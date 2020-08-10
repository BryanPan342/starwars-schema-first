import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as StarwarsSchemaFirst from '../lib/starwars-schema-first-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new StarwarsSchemaFirst.StarwarsSchemaFirstStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
