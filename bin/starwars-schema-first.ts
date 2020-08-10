#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { StarwarsSchemaFirstStack } from '../lib/starwars-schema-first-stack';

const app = new cdk.App();
new StarwarsSchemaFirstStack(app, 'StarwarsSchemaFirstStack');
