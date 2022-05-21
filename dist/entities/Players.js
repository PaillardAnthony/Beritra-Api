"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Players = void 0;
const typeorm_1 = require("typeorm");
const PlayerMotions_1 = require("./PlayerMotions");
const Friends_1 = require("./Friends");
const PlayerEffects_1 = require("./PlayerEffects");
const PlayerQuests_1 = require("./PlayerQuests");
const EventItems_1 = require("./EventItems");
const PlayerLifeStats_1 = require("./PlayerLifeStats");
const PlayerTitles_1 = require("./PlayerTitles");
const PlayerWardrobe_1 = require("./PlayerWardrobe");
const OldNames_1 = require("./OldNames");
const PlayerAppearance_1 = require("./PlayerAppearance");
const Mail_1 = require("./Mail");
const PlayerPets_1 = require("./PlayerPets");
const PlayerNpcFactions_1 = require("./PlayerNpcFactions");
const CraftCooldowns_1 = require("./CraftCooldowns");
const Guides_1 = require("./Guides");
const PlayerMacrosses_1 = require("./PlayerMacrosses");
const PlayerSkills_1 = require("./PlayerSkills");
const Surveys_1 = require("./Surveys");
const PlayerEmotions_1 = require("./PlayerEmotions");
const PlayerBindPoint_1 = require("./PlayerBindPoint");
const Broker_1 = require("./Broker");
const PlayerGameStats_1 = require("./PlayerGameStats");
const LegionMembers_1 = require("./LegionMembers");
const PlayerVars_1 = require("./PlayerVars");
const PlayerRegisteredItems_1 = require("./PlayerRegisteredItems");
const PlayerAtreianBestiary_1 = require("./PlayerAtreianBestiary");
const PlayerSettings_1 = require("./PlayerSettings");
const PlayerCooldowns_1 = require("./PlayerCooldowns");
const PortalCooldowns_1 = require("./PortalCooldowns");
const PlayerPunishments_1 = require("./PlayerPunishments");
const ItemCooldowns_1 = require("./ItemCooldowns");
const PlayerCp_1 = require("./PlayerCp");
const AbyssRank_1 = require("./AbyssRank");
const Blocks_1 = require("./Blocks");
const PlayerStigmasEquipped_1 = require("./PlayerStigmasEquipped");
const WebReward_1 = require("./WebReward");
const PlayerRecipes_1 = require("./PlayerRecipes");
let Players = class Players {
};
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "id" }),
    __metadata("design:type", Number)
], Players.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", unique: true, length: 50 }),
    __metadata("design:type", String)
], Players.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "account_id" }),
    __metadata("design:type", Number)
], Players.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "account_name", length: 50 }),
    __metadata("design:type", String)
], Players.prototype, "accountName", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "exp", default: () => "'0'" }),
    __metadata("design:type", String)
], Players.prototype, "exp", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "recoverexp", default: () => "'0'" }),
    __metadata("design:type", String)
], Players.prototype, "recoverexp", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "x", precision: 12 }),
    __metadata("design:type", Number)
], Players.prototype, "x", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "y", precision: 12 }),
    __metadata("design:type", Number)
], Players.prototype, "y", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "z", precision: 12 }),
    __metadata("design:type", Number)
], Players.prototype, "z", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "heading" }),
    __metadata("design:type", Number)
], Players.prototype, "heading", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "world_id" }),
    __metadata("design:type", Number)
], Players.prototype, "worldId", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "gender", enum: ["MALE", "FEMALE"] }),
    __metadata("design:type", String)
], Players.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", { name: "race", enum: ["ASMODIANS", "ELYOS"] }),
    __metadata("design:type", String)
], Players.prototype, "race", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
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
    }),
    __metadata("design:type", String)
], Players.prototype, "playerClass", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "creation_date", nullable: true }),
    __metadata("design:type", Date)
], Players.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "deletion_date", nullable: true }),
    __metadata("design:type", Date)
], Players.prototype, "deletionDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp", { name: "last_online", nullable: true }),
    __metadata("design:type", Date)
], Players.prototype, "lastOnline", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "quest_expands", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Players.prototype, "questExpands", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", {
        name: "advenced_stigma_slot_size",
        width: 1,
        default: () => "'0'",
    }),
    __metadata("design:type", Boolean)
], Players.prototype, "advencedStigmaSlotSize", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "warehouse_size", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Players.prototype, "warehouseSize", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "mailbox_letters", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "mailboxLetters", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "bind_point", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "bindPoint", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "title_id", default: () => "'-1'" }),
    __metadata("design:type", Number)
], Players.prototype, "titleId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "bonus_title_id" }),
    __metadata("design:type", Number)
], Players.prototype, "bonusTitleId", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "online", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Players.prototype, "online", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "note", nullable: true }),
    __metadata("design:type", String)
], Players.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "npc_expands", width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Players.prototype, "npcExpands", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "world_owner", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "worldOwner", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "dp", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "dp", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", {
        name: "soul_sickness",
        unsigned: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], Players.prototype, "soulSickness", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "reposte_energy", default: () => "'0'" }),
    __metadata("design:type", String)
], Players.prototype, "reposteEnergy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "mentor_flag_time", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "mentorFlagTime", void 0);
__decorate([
    (0, typeorm_1.Column)("decimal", {
        name: "last_transfer_time",
        precision: 20,
        scale: 0,
        default: () => "'0'",
    }),
    __metadata("design:type", String)
], Players.prototype, "lastTransferTime", void 0);
__decorate([
    (0, typeorm_1.Column)("tinyint", { name: "is_archdaeva", width: 1 }),
    __metadata("design:type", Boolean)
], Players.prototype, "isArchdaeva", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "creativity_point", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "creativityPoint", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "creativity_point_used",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], Players.prototype, "creativityPointUsed", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "aura_of_growth", default: () => "'0'" }),
    __metadata("design:type", String)
], Players.prototype, "auraOfGrowth", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "join_legion_id", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "joinLegionId", void 0);
__decorate([
    (0, typeorm_1.Column)("enum", {
        name: "join_state",
        enum: ["NONE", "DENIED", "ACCEPTED"],
        default: () => "'NONE'",
    }),
    __metadata("design:type", String)
], Players.prototype, "joinState", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "berdin_star", default: () => "'0'" }),
    __metadata("design:type", String)
], Players.prototype, "berdinStar", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "luna_consume", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "lunaConsume", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "muni_keys", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "muniKeys", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "luna_consume_count", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "lunaConsumeCount", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "wardrobe_slot", default: () => "'2'" }),
    __metadata("design:type", Number)
], Players.prototype, "wardrobeSlot", void 0);
__decorate([
    (0, typeorm_1.Column)("bigint", { name: "abyss_favor", default: () => "'0'" }),
    __metadata("design:type", String)
], Players.prototype, "abyssFavor", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "luna_points", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "lunaPoints", void 0);
__decorate([
    (0, typeorm_1.Column)("int", {
        name: "frenzy_points",
        nullable: true,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], Players.prototype, "frenzyPoints", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "frenzy_count", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "frenzyCount", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "toc_floor", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "tocFloor", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "minion_energy", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "minionEnergy", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "last_minion", nullable: true, default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "lastMinion", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "stone_cp", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "stoneCp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "quest_cp", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "questCp", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "golden_dice", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "goldenDice", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "sweep_reset", default: () => "'0'" }),
    __metadata("design:type", Number)
], Players.prototype, "sweepReset", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerMotions_1.PlayerMotions, (playerMotions) => playerMotions.player),
    __metadata("design:type", Array)
], Players.prototype, "playerMotions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Friends_1.Friends, (friends) => friends.player2),
    __metadata("design:type", Array)
], Players.prototype, "friends", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Friends_1.Friends, (friends) => friends.friend2),
    __metadata("design:type", Array)
], Players.prototype, "friends2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerEffects_1.PlayerEffects, (playerEffects) => playerEffects.player),
    __metadata("design:type", Array)
], Players.prototype, "playerEffects", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerQuests_1.PlayerQuests, (playerQuests) => playerQuests.player),
    __metadata("design:type", Array)
], Players.prototype, "playerQuests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => EventItems_1.EventItems, (eventItems) => eventItems.player),
    __metadata("design:type", Array)
], Players.prototype, "eventItems", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PlayerLifeStats_1.PlayerLifeStats, (playerLifeStats) => playerLifeStats.player),
    __metadata("design:type", PlayerLifeStats_1.PlayerLifeStats)
], Players.prototype, "playerLifeStats", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerTitles_1.PlayerTitles, (playerTitles) => playerTitles.player),
    __metadata("design:type", Array)
], Players.prototype, "playerTitles", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerWardrobe_1.PlayerWardrobe, (playerWardrobe) => playerWardrobe.player),
    __metadata("design:type", Array)
], Players.prototype, "playerWardrobes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OldNames_1.OldNames, (oldNames) => oldNames.player),
    __metadata("design:type", Array)
], Players.prototype, "oldNames", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PlayerAppearance_1.PlayerAppearance, (playerAppearance) => playerAppearance.player),
    __metadata("design:type", PlayerAppearance_1.PlayerAppearance)
], Players.prototype, "playerAppearance", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Mail_1.Mail, (mail) => mail.mailRecipient),
    __metadata("design:type", Array)
], Players.prototype, "mail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerPets_1.PlayerPets, (playerPets) => playerPets.player),
    __metadata("design:type", Array)
], Players.prototype, "playerPets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerNpcFactions_1.PlayerNpcFactions, (playerNpcFactions) => playerNpcFactions.player),
    __metadata("design:type", Array)
], Players.prototype, "playerNpcFactions", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CraftCooldowns_1.CraftCooldowns, (craftCooldowns) => craftCooldowns.player),
    __metadata("design:type", Array)
], Players.prototype, "craftCooldowns", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Guides_1.Guides, (guides) => guides.player),
    __metadata("design:type", Array)
], Players.prototype, "guides", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerMacrosses_1.PlayerMacrosses, (playerMacrosses) => playerMacrosses.player),
    __metadata("design:type", Array)
], Players.prototype, "playerMacrosses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerSkills_1.PlayerSkills, (playerSkills) => playerSkills.player),
    __metadata("design:type", Array)
], Players.prototype, "playerSkills", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Surveys_1.Surveys, (surveys) => surveys.owner),
    __metadata("design:type", Array)
], Players.prototype, "surveys", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerEmotions_1.PlayerEmotions, (playerEmotions) => playerEmotions.player),
    __metadata("design:type", Array)
], Players.prototype, "playerEmotions", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PlayerBindPoint_1.PlayerBindPoint, (playerBindPoint) => playerBindPoint.player),
    __metadata("design:type", PlayerBindPoint_1.PlayerBindPoint)
], Players.prototype, "playerBindPoint", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Broker_1.Broker, (broker) => broker.seller_2),
    __metadata("design:type", Array)
], Players.prototype, "brokers", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PlayerGameStats_1.PlayerGameStats, (playerGameStats) => playerGameStats.player),
    __metadata("design:type", PlayerGameStats_1.PlayerGameStats)
], Players.prototype, "playerGameStats", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => LegionMembers_1.LegionMembers, (legionMembers) => legionMembers.player),
    __metadata("design:type", LegionMembers_1.LegionMembers)
], Players.prototype, "legionMembers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerVars_1.PlayerVars, (playerVars) => playerVars.player),
    __metadata("design:type", Array)
], Players.prototype, "playerVars", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerRegisteredItems_1.PlayerRegisteredItems, (playerRegisteredItems) => playerRegisteredItems.player),
    __metadata("design:type", Array)
], Players.prototype, "playerRegisteredItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerAtreianBestiary_1.PlayerAtreianBestiary, (playerAtreianBestiary) => playerAtreianBestiary.player),
    __metadata("design:type", Array)
], Players.prototype, "playerAtreianBestiaries", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerSettings_1.PlayerSettings, (playerSettings) => playerSettings.player),
    __metadata("design:type", Array)
], Players.prototype, "playerSettings", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerCooldowns_1.PlayerCooldowns, (playerCooldowns) => playerCooldowns.player),
    __metadata("design:type", Array)
], Players.prototype, "playerCooldowns", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PortalCooldowns_1.PortalCooldowns, (portalCooldowns) => portalCooldowns.player),
    __metadata("design:type", Array)
], Players.prototype, "portalCooldowns", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerPunishments_1.PlayerPunishments, (playerPunishments) => playerPunishments.player),
    __metadata("design:type", Array)
], Players.prototype, "playerPunishments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ItemCooldowns_1.ItemCooldowns, (itemCooldowns) => itemCooldowns.player),
    __metadata("design:type", Array)
], Players.prototype, "itemCooldowns", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerCp_1.PlayerCp, (playerCp) => playerCp.player),
    __metadata("design:type", Array)
], Players.prototype, "playerCps", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => AbyssRank_1.AbyssRank, (abyssRank) => abyssRank.player),
    __metadata("design:type", AbyssRank_1.AbyssRank)
], Players.prototype, "abyssRank", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Blocks_1.Blocks, (blocks) => blocks.player2),
    __metadata("design:type", Array)
], Players.prototype, "blocks", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Blocks_1.Blocks, (blocks) => blocks.blockedPlayer2),
    __metadata("design:type", Array)
], Players.prototype, "blocks2", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerStigmasEquipped_1.PlayerStigmasEquipped, (playerStigmasEquipped) => playerStigmasEquipped.player),
    __metadata("design:type", Array)
], Players.prototype, "playerStigmasEquippeds", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WebReward_1.WebReward, (webReward) => webReward.itemOwner2),
    __metadata("design:type", Array)
], Players.prototype, "webRewards", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PlayerRecipes_1.PlayerRecipes, (playerRecipes) => playerRecipes.player),
    __metadata("design:type", Array)
], Players.prototype, "playerRecipes", void 0);
Players = __decorate([
    (0, typeorm_1.Index)("name_unique", ["name"], { unique: true }),
    (0, typeorm_1.Index)("account_id", ["accountId"], {}),
    (0, typeorm_1.Entity)("players", { schema: "beritra" })
], Players);
exports.Players = Players;
//# sourceMappingURL=Players.js.map