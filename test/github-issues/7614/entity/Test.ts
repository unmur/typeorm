import {Entity, Index, PrimaryColumn} from "../../../../src";

enum ExternalUserProvider {
    A = "A",
    B = "B",
    C = "C",
}

@Entity()
export class TestEntity {
    @PrimaryColumn({ name: "provider", type: "enum", enumName: "external_user_provider", enum: ExternalUserProvider })
    @Index()
    public provider!: ExternalUserProvider;
}
