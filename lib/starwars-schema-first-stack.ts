import { join } from 'path';
import * as appsync from '@aws-cdk/aws-appsync';
import * as cdk from '@aws-cdk/core';

export class StarwarsSchemaFirstStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new appsync.GraphQLApi(this, 'SWAPI', {
      name: 'star-wars-api',
      schemaDefinition: appsync.SchemaDefinition.FILE,
      schemaDefinitionFile: join(__dirname, 'starwars.graphql' ),
    });

  }
}
