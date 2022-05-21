import { Column, Entity, Index, OneToMany, OneToOne } from "typeorm";
import { PlayerMotions } from "./PlayerMotions";
import { Friends } from "./Friends";
import { PlayerEffects } from "./PlayerEffects";
import { PlayerQuests } from "./PlayerQuests";
import { EventItems } from "./EventItems";
import { PlayerLifeStats } from "./PlayerLifeStats";
import { PlayerTitles } from "./PlayerTitles";
import { PlayerWardrobe } from "./PlayerWardrobe";
import { OldNames } from "./OldNames";
import { PlayerAppearance } from "./PlayerAppearance";
import { Mail } from "./Mail";
import { PlayerPets } from "./PlayerPets";
import { PlayerNpcFactions } from "./PlayerNpcFactions";
import { CraftCooldowns } from "./CraftCooldowns";
import { Guides } from "./Guides";
import { PlayerMacrosses } from "./PlayerMacrosses";
import { PlayerSkills } from "./PlayerSkills";
import { Surveys } from "./Surveys";
import { PlayerEmotions } from "./PlayerEmotions";
import { PlayerBindPoint } from "./PlayerBindPoint";
import { Broker } from "./Broker";
import { PlayerGameStats } from "./PlayerGameStats";
import { LegionMembers } from "./LegionMembers";
import { PlayerVars } from "./PlayerVars";
import { PlayerRegisteredItems } from "./PlayerRegisteredItems";
import { PlayerAtreianBestiary } from "./PlayerAtreianBestiary";
import { PlayerSettings } from "./PlayerSettings";
import { PlayerCooldowns } from "./PlayerCooldowns";
import { PortalCooldowns } from "./PortalCooldowns";
import { PlayerPunishments } from "./PlayerPunishments";
import { ItemCooldowns } from "./ItemCooldowns";
import { PlayerCp } from "./PlayerCp";
import { AbyssRank } from "./AbyssRank";
import { Blocks } from "./Blocks";
import { PlayerStigmasEquipped } from "./PlayerStigmasEquipped";
import { WebReward } from "./WebReward";
import { PlayerRecipes } from "./PlayerRecipes";

@Index("name_unique", ["name"], { unique: true })
@Index("account_id", ["accountId"], {})
@Entity("players", { schema: "beritra" })
export class Players {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 50 })
  name: string;

  @Column("int", { name: "account_id" })
  accountId: number;

  @Column("varchar", { name: "account_name", length: 50 })
  accountName: string;

  @Column("bigint", { name: "exp", default: () => "'0'" })
  exp: string;

  @Column("bigint", { name: "recoverexp", default: () => "'0'" })
  recoverexp: string;

  @Column("float", { name: "x", precision: 12 })
  x: number;

  @Column("float", { name: "y", precision: 12 })
  y: number;

  @Column("float", { name: "z", precision: 12 })
  z: number;

  @Column("int", { name: "heading" })
  heading: number;

  @Column("int", { name: "world_id" })
  worldId: number;

  @Column("enum", { name: "gender", enum: ["MALE", "FEMALE"] })
  gender: "MALE" | "FEMALE";

  @Column("enum", { name: "race", enum: ["ASMODIANS", "ELYOS"] })
  race: "ASMODIANS" | "ELYOS";

  @Column("enum", {
    name: "player_class",
    enum: [
      "WARRIOR",
      "GLADIATOR",
      "TEMPLAR",
      "SCOUT",
      "ASSASSIN",
      "RANGER",
      "MAGE",
      "SORCERER",
      "SPIRIT_MASTER",
      "PRIEST",
      "CLERIC",
      "CHANTER",
      "TECHNIST",
      "GUNSLINGER",
      "AETHERTECH",
      "MUSE",
      "SONGWEAVER",
    ],
  })
  playerClass:
    | "WARRIOR"
    | "GLADIATOR"
    | "TEMPLAR"
    | "SCOUT"
    | "ASSASSIN"
    | "RANGER"
    | "MAGE"
    | "SORCERER"
    | "SPIRIT_MASTER"
    | "PRIEST"
    | "CLERIC"
    | "CHANTER"
    | "TECHNIST"
    | "GUNSLINGER"
    | "AETHERTECH"
    | "MUSE"
    | "SONGWEAVER";

  @Column("timestamp", { name: "creation_date", nullable: true })
  creationDate: Date | null;

  @Column("timestamp", { name: "deletion_date", nullable: true })
  deletionDate: Date | null;

  @Column("timestamp", { name: "last_online", nullable: true })
  lastOnline: Date | null;

  @Column("tinyint", { name: "quest_expands", width: 1, default: () => "'0'" })
  questExpands: boolean;

  @Column("tinyint", {
    name: "advenced_stigma_slot_size",
    width: 1,
    default: () => "'0'",
  })
  advencedStigmaSlotSize: boolean;

  @Column("tinyint", { name: "warehouse_size", width: 1, default: () => "'0'" })
  warehouseSize: boolean;

  @Column("tinyint", { name: "mailbox_letters", default: () => "'0'" })
  mailboxLetters: number;

  @Column("int", { name: "bind_point", default: () => "'0'" })
  bindPoint: number;

  @Column("int", { name: "title_id", default: () => "'-1'" })
  titleId: number;

  @Column("int", { name: "bonus_title_id" })
  bonusTitleId: number;

  @Column("tinyint", { name: "online", width: 1, default: () => "'0'" })
  online: boolean;

  @Column("text", { name: "note", nullable: true })
  note: string | null;

  @Column("tinyint", { name: "npc_expands", width: 1, default: () => "'0'" })
  npcExpands: boolean;

  @Column("int", { name: "world_owner", default: () => "'0'" })
  worldOwner: number;

  @Column("int", { name: "dp", default: () => "'0'" })
  dp: number;

  @Column("tinyint", {
    name: "soul_sickness",
    unsigned: true,
    default: () => "'0'",
  })
  soulSickness: number;

  @Column("bigint", { name: "reposte_energy", default: () => "'0'" })
  reposteEnergy: string;

  @Column("int", { name: "mentor_flag_time", default: () => "'0'" })
  mentorFlagTime: number;

  @Column("decimal", {
    name: "last_transfer_time",
    precision: 20,
    scale: 0,
    default: () => "'0'",
  })
  lastTransferTime: string;

  @Column("tinyint", { name: "is_archdaeva", width: 1 })
  isArchdaeva: boolean;

  @Column("int", { name: "creativity_point", default: () => "'0'" })
  creativityPoint: number;

  @Column("int", {
    name: "creativity_point_used",
    nullable: true,
    default: () => "'0'",
  })
  creativityPointUsed: number | null;

  @Column("bigint", { name: "aura_of_growth", default: () => "'0'" })
  auraOfGrowth: string;

  @Column("int", { name: "join_legion_id", default: () => "'0'" })
  joinLegionId: number;

  @Column("enum", {
    name: "join_state",
    enum: ["NONE", "DENIED", "ACCEPTED"],
    default: () => "'NONE'",
  })
  joinState: "NONE" | "DENIED" | "ACCEPTED";

  @Column("bigint", { name: "berdin_star", default: () => "'0'" })
  berdinStar: string;

  @Column("int", { name: "luna_consume", default: () => "'0'" })
  lunaConsume: number;

  @Column("int", { name: "muni_keys", default: () => "'0'" })
  muniKeys: number;

  @Column("int", { name: "luna_consume_count", default: () => "'0'" })
  lunaConsumeCount: number;

  @Column("int", { name: "wardrobe_slot", default: () => "'2'" })
  wardrobeSlot: number;

  @Column("bigint", { name: "abyss_favor", default: () => "'0'" })
  abyssFavor: string;

  @Column("int", { name: "luna_points", nullable: true, default: () => "'0'" })
  lunaPoints: number | null;

  @Column("int", {
    name: "frenzy_points",
    nullable: true,
    default: () => "'0'",
  })
  frenzyPoints: number | null;

  @Column("int", { name: "frenzy_count", nullable: true, default: () => "'0'" })
  frenzyCount: number | null;

  @Column("int", { name: "toc_floor", nullable: true, default: () => "'0'" })
  tocFloor: number | null;

  @Column("int", { name: "minion_energy", default: () => "'0'" })
  minionEnergy: number;

  @Column("int", { name: "last_minion", nullable: true, default: () => "'0'" })
  lastMinion: number | null;

  @Column("int", { name: "stone_cp", default: () => "'0'" })
  stoneCp: number;

  @Column("int", { name: "quest_cp", default: () => "'0'" })
  questCp: number;

  @Column("int", { name: "golden_dice", default: () => "'0'" })
  goldenDice: number;

  @Column("int", { name: "sweep_reset", default: () => "'0'" })
  sweepReset: number;

  @OneToMany(() => PlayerMotions, (playerMotions) => playerMotions.player)
  playerMotions: PlayerMotions[];

  @OneToMany(() => Friends, (friends) => friends.player2)
  friends: Friends[];

  @OneToMany(() => Friends, (friends) => friends.friend2)
  friends2: Friends[];

  @OneToMany(() => PlayerEffects, (playerEffects) => playerEffects.player)
  playerEffects: PlayerEffects[];

  @OneToMany(() => PlayerQuests, (playerQuests) => playerQuests.player)
  playerQuests: PlayerQuests[];

  @OneToMany(() => EventItems, (eventItems) => eventItems.player)
  eventItems: EventItems[];

  @OneToOne(() => PlayerLifeStats, (playerLifeStats) => playerLifeStats.player)
  playerLifeStats: PlayerLifeStats;

  @OneToMany(() => PlayerTitles, (playerTitles) => playerTitles.player)
  playerTitles: PlayerTitles[];

  @OneToMany(() => PlayerWardrobe, (playerWardrobe) => playerWardrobe.player)
  playerWardrobes: PlayerWardrobe[];

  @OneToMany(() => OldNames, (oldNames) => oldNames.player)
  oldNames: OldNames[];

  @OneToOne(
    () => PlayerAppearance,
    (playerAppearance) => playerAppearance.player
  )
  playerAppearance: PlayerAppearance;

  @OneToMany(() => Mail, (mail) => mail.mailRecipient)
  mail: Mail[];

  @OneToMany(() => PlayerPets, (playerPets) => playerPets.player)
  playerPets: PlayerPets[];

  @OneToMany(
    () => PlayerNpcFactions,
    (playerNpcFactions) => playerNpcFactions.player
  )
  playerNpcFactions: PlayerNpcFactions[];

  @OneToMany(() => CraftCooldowns, (craftCooldowns) => craftCooldowns.player)
  craftCooldowns: CraftCooldowns[];

  @OneToMany(() => Guides, (guides) => guides.player)
  guides: Guides[];

  @OneToMany(() => PlayerMacrosses, (playerMacrosses) => playerMacrosses.player)
  playerMacrosses: PlayerMacrosses[];

  @OneToMany(() => PlayerSkills, (playerSkills) => playerSkills.player)
  playerSkills: PlayerSkills[];

  @OneToMany(() => Surveys, (surveys) => surveys.owner)
  surveys: Surveys[];

  @OneToMany(() => PlayerEmotions, (playerEmotions) => playerEmotions.player)
  playerEmotions: PlayerEmotions[];

  @OneToOne(() => PlayerBindPoint, (playerBindPoint) => playerBindPoint.player)
  playerBindPoint: PlayerBindPoint;

  @OneToMany(() => Broker, (broker) => broker.seller_2)
  brokers: Broker[];

  @OneToOne(() => PlayerGameStats, (playerGameStats) => playerGameStats.player)
  playerGameStats: PlayerGameStats;

  @OneToOne(() => LegionMembers, (legionMembers) => legionMembers.player)
  legionMembers: LegionMembers;

  @OneToMany(() => PlayerVars, (playerVars) => playerVars.player)
  playerVars: PlayerVars[];

  @OneToMany(
    () => PlayerRegisteredItems,
    (playerRegisteredItems) => playerRegisteredItems.player
  )
  playerRegisteredItems: PlayerRegisteredItems[];

  @OneToMany(
    () => PlayerAtreianBestiary,
    (playerAtreianBestiary) => playerAtreianBestiary.player
  )
  playerAtreianBestiaries: PlayerAtreianBestiary[];

  @OneToMany(() => PlayerSettings, (playerSettings) => playerSettings.player)
  playerSettings: PlayerSettings[];

  @OneToMany(() => PlayerCooldowns, (playerCooldowns) => playerCooldowns.player)
  playerCooldowns: PlayerCooldowns[];

  @OneToMany(() => PortalCooldowns, (portalCooldowns) => portalCooldowns.player)
  portalCooldowns: PortalCooldowns[];

  @OneToMany(
    () => PlayerPunishments,
    (playerPunishments) => playerPunishments.player
  )
  playerPunishments: PlayerPunishments[];

  @OneToMany(() => ItemCooldowns, (itemCooldowns) => itemCooldowns.player)
  itemCooldowns: ItemCooldowns[];

  @OneToMany(() => PlayerCp, (playerCp) => playerCp.player)
  playerCps: PlayerCp[];

  @OneToOne(() => AbyssRank, (abyssRank) => abyssRank.player)
  abyssRank: AbyssRank;

  @OneToMany(() => Blocks, (blocks) => blocks.player2)
  blocks: Blocks[];

  @OneToMany(() => Blocks, (blocks) => blocks.blockedPlayer2)
  blocks2: Blocks[];

  @OneToMany(
    () => PlayerStigmasEquipped,
    (playerStigmasEquipped) => playerStigmasEquipped.player
  )
  playerStigmasEquippeds: PlayerStigmasEquipped[];

  @OneToMany(() => WebReward, (webReward) => webReward.itemOwner2)
  webRewards: WebReward[];

  @OneToMany(() => PlayerRecipes, (playerRecipes) => playerRecipes.player)
  playerRecipes: PlayerRecipes[];
}
