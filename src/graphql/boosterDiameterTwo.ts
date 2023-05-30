import { graphql } from "@/lib/gql";

const BoosterDiameterTwo = graphql('query BoosterDiameter($limit: Int) {
  rockets(limit: $limit) {
    boosters
    company
    diameter {
      meters
    }
  }
}')